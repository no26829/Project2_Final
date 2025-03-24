const express = require('express');
const jwt = require('jsonwebtoken');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 8000;
const petTargets = ['http://critter-core-1:5200', 'http://critter-core-2:5200'];
let petIndex = 0;

function verifyJWT(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send("Token missing");
  try {
    jwt.verify(token, 'secretkey');
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
}

app.use('/auth/token', createProxyMiddleware({ target: 'http://access-gatekeeper:5100', changeOrigin: true }));
app.use('/creature', verifyJWT, createProxyMiddleware({
  target: petTargets[0],
  changeOrigin: true,
  router: () => {
    const target = petTargets[petIndex];
    petIndex = (petIndex + 1) % petTargets.length;
    return target;
  }
}));
app.use('/progress', verifyJWT, createProxyMiddleware({ target: 'http://xp-tracker:5300', changeOrigin: true }));

app.listen(PORT, () => console.log(`Command Router live on port ${PORT}`));


// Health check endpoint
app.get('/health', (req, res) => res.send('OK'));
