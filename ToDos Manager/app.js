var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

const {connectDB} = require('./config/db.config')
connectDB();

const articleRoutes = require('./routes/articles.routes')
const authRoutes = require('./routes/auth.routes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/articles',articleRoutes)
app.use('./auth', authRoutes)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // render the error page
  res.status(err.status || 500);
  res.json({err});
});

module.exports = app;
