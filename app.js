const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1 style="color: #4CAF50; font-family: Arial;">🔥 Welcome to Jenkins Visual Node.js App 🔥</h1><p>Build your CI/CD pipelines with style!</p>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

