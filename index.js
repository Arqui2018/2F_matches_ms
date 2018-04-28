'use strict';

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all routes
const routes = require('./config/routes.js');
// set all routes
routes(app);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.sendStatus(404);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.sendStatus(err.status || 500);
});

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
