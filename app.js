const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
  console.log('/users middleware >>>>>>>>');
  res.send('<H1>The Middleware that handles just users</H1>');
});

app.use('/', (req, res, next) => {
  console.log('/ middleware');
  res.send('<H2>The Middleware that handles just /</H2>');
});

app.listen(3000);
