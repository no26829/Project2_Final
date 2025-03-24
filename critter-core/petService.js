const express = require('express');
const app = express();

// Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use(express.json());

const PORT = process.env.PORT || 5200;

let pets = { "1": { name: "Sniffles", hunger: 70 } };

app.get('/creature/:id', (req, res) => {
  const pet = pets[req.params.id] || { name: "Unknown", hunger: 0 };
  res.json(pet);
});

app.post('/creature/:id/nourish', (req, res) => {
  if (!pets[req.params.id]) pets[req.params.id] = { name: "Sniffles", hunger: 70 };
  pets[req.params.id].hunger = Math.max(0, pets[req.params.id].hunger - 10);
  res.json(pets[req.params.id]);
});

app.listen(PORT, () => console.log(`Critter Core running on port ${PORT}`));


// Health check endpoint
app.get('/health', (req, res) => res.send('OK'));
