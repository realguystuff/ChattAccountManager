export {};

const express = require('express');
import path from 'path';
const favicon = require('serve-favicon');

express().use(favicon(path.join(__dirname,'favicon.ico')));

express().get('/', (req:any, res:any) => {
  res.sendFile('./public/index.html', {root: __dirname});
});

express().get('/login', (req:any, res:any) => {
  res.sendFile('./login/index.html', {root: __dirname});
});

express().get('/signup', (req:any, res:any) => {
  res.sendFile('./signup/index.html', {root: __dirname});
});

express().listen(80, () => {
  console.log('server started on port 80');
});

express().use(function(req:any, res:any) {
    res.status(404).end('Error CL5: UnknownPathException (hint: CL5 usually means that you have typed in the path wrong. Check lesmp.tk without any path).');
});
