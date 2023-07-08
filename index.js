const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', {root: __dirname});
});

app.get('/login', (req, res) => {
  res.sendFile('./login/index.html', {root: __dirname});
});

app.get('/login', (req, res) => {
  res.sendFile('./signup/index.html', {root: __dirname});
});

app.listen(80, () => {
  console.log('server started on port 80');
});
