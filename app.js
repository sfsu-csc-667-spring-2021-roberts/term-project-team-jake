if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');

var indexRouter = require('./routes/unauth/index');
var authRouter = require('./routes/unauth/authenticate');
var usersRouter = require('./routes/users');
var testsRouter = require('./routes/tests');
var lobbyRouter = require('./routes/auth/lobby');
var gameRouter = require('./routes/auth/game');
var chatRouter = require('./routes/auth/chat')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    //cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter, authRouter);
app.use('/users', usersRouter);
app.use('/test', testsRouter);
app.use('/lobby', lobbyRouter);
app.use('/game', gameRouter);
app.use('/chat', chatRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
