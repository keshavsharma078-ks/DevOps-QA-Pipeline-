// api/server.js
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  res.status(201).json({ message: 'User created', user });
});

app.listen(3000, () => console.log('API running on port 3000'));