var express = require("express");
var router = express.Router();
const Games = require("../../db").Games;
const { isAuth } = require("../../authorization/isAuth");

router.get('/creategame', isAuth, (req, res) => {
    res.render('creategame.pug', { username: req.user.username });
});

router.post('/creategame', isAuth, (req, res) => {
    let {
        gameName, numOfPlayers 
    } = req.body
    console.log(gameName);
    console.log(numOfPlayers);
    res.redirect('/game/gamerooms');
});

router.get('/gamerooms', isAuth, (req, res) => {
    res.render('gamerooms.pug', { username: req.user.username });
});

module.exports = router;