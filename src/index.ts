const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

express().use(favicon(path.join(__dirname,'favicon.ico')));

express().get('/', (req, res) => {
  res.sendFile('./public/index.html', {root: __dirname});
});

express().get('/login', (req, res) => {
  res.sendFile('./login/index.html', {root: __dirname});
});

express().get('/signup', (req, res) => {
  res.sendFile('./signup/index.html', {root: __dirname});
});

express().listen(80, () => {
  console.log('server started on port 80');
});

express().use(function(req, res) {
    res.status(404).end('Error CL5: UnknownPathException (hint: CL5 usually means that you have typed in the path wrong. Check lesmp.tk without any path).');
});
