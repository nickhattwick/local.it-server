const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { router, passport } = require('./router');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

app.use(router);

app.listen(PORT, (err) => {
  if (err) { console.error(err); }
  console.log(`Server listening on ${HOST}:${PORT}`);
});
