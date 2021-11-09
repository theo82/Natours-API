const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./router/tourRoutes');
const userRouter = require('./router/userRoutes');

const app = express();

// 1) MIDDLEWAREs
// A step a request goes through before it gets processed.
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) ROUTE HANDLERS

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// 4) START SERVER

module.exports = app;
