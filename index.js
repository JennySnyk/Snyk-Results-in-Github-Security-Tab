const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // A vulnerable piece of code for Snyk Code to find
  let name = req.query.name || 'Guest';
  res.send('<h1>Hello, ' + name + '</h1>'); // Unsanitized input, potential XSS
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
