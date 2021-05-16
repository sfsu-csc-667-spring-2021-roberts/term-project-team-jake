var express = require('express');
var router = express.Router();
const {notAuth} = require('../../authorization/isAuth');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.user) {
    res.redirect('/lobby');
  } else {
    res.render('index.pug');
  }
});

router.get('/login', notAuth, function(req, res, next) {
  res.render('login.pug');
});

router.get('/register', notAuth, function(req, res, next) {
  res.render('register.pug');
});

module.exports = router;