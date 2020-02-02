const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-user', (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="title"><button type="submit">Add User</button></form>'
  );
});

app.use('/user', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Welcome from Express!</h1>');
});

app.listen(3000);
