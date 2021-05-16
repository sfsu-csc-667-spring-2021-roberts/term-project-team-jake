var express = require("express");
var router = express.Router();
const Games = require('../../db').Games;
const {isAuth} = require('../../authorization/isAuth');


router.get("/", isAuth, function (req, res, next) {
    res.render('lobby.pug');
});

module.exports = router;