const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use(express.json());

const PORT = process.env.PORT || 5100;

app.post('/auth/token', (req, res) => {
  const user = { name: req.body.username };
  const token = jwt.sign(user, 'secretkey', { expiresIn: '1h' });
  res.json({ accessToken: token });
});

app.listen(PORT, () => console.log(`Access Gatekeeper running on port ${PORT}`));


// Health check endpoint
app.get('/health', (req, res) => res.send('OK'));
