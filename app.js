const express = require('express');

const app = express();
const addUserRouters = require('./routes/add-user');
const userRouters = require('./routes/user');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(addUserRouters);

app.use(userRouters);

app.use((resq, res, next) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(3000);
