var express = require('express');
var router = express.Router();
const games = require('../../db').games;
const {isAuth} = require('../../authorization/isAuth');

router.get("/", isAuth, function (req, res, next) {
    res.render('views/game.pug');
});

module.exports = router;