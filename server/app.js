/***************************************************

CREATED_BY: Yash Saxena

APP.JS
This is the file that initates the express app

- Set routes
- Set middleware
- Name space urls
- Set environment
- Initiate mongoDB connection
- Catch errors 404 and 500
- Export the app

***************************************************/

/**
 * Dependecies
 */
var express      = require('express'),
    path         = require('path'),
    favicon      = require('serve-favicon'),
    logger       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    app          = express();


/**
 * Routes
 */

 // Home angular app
var homeRoutes = require('./routes/home/index');
app.use('/', homeRoutes);

/**
 * Middleware
 */

// The views/.jade will render in the following directory
app.set('views', path.join(__dirname, '../client/spa_server_views'));

// Set the viewing engine
app.set('view engine', 'jade');

// Favicon save location
app.use(favicon(__dirname + '/favicon.ico'));

// Defaults
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));


/**
 * Environemnts & Error handling - 404 500
 */

// catch 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development
if (app.get('env') === 'development') {
  // Catch 500
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
