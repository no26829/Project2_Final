const express = require('express');
const app = express();

// Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use(express.json());

const PORT = process.env.PORT || 5300;
let stats = { "1": { xp: 120, coins: 45 } };

app.get('/progress/:id', (req, res) => {
  res.json(stats[req.params.id] || { xp: 0, coins: 0 });
});

app.post('/progress/:id/update', (req, res) => {
  const { xp, coins } = req.body;
  if (!stats[req.params.id]) stats[req.params.id] = { xp: 0, coins: 0 };
  stats[req.params.id].xp += xp || 0;
  stats[req.params.id].coins += coins || 0;
  res.json(stats[req.params.id]);
});

app.listen(PORT, () => console.log(`XP Tracker running on port ${PORT}`));


// Health check endpoint
app.get('/health', (req, res) => res.send('OK'));
