var express = require("express");
var router = express.Router();
const Games = require("../../db").Games;
const { isAuth } = require("../../authorization/isAuth");

router.get('/creategame', isAuth, (req, res) => {
    res.render('creategame.pug', { username: req.user.username });
});

router.post('/creategame', isAuth, (req, res) => {
    const {gameName, numOfPlayers} = req.body
    Games.create(gameName, numOfPlayers, 1);
    res.redirect('/game/gamerooms');
});

router.get('/gamerooms', async (req, res) => {
    const rooms = await Games.allGames();
    console.log(rooms);
    res.render('gamerooms.pug', {rooms});
});

router.get('/join/:id', (req, res) => {
    console.log('joining game '+ req.params.id);
    res.send({status: 'Joining...'});
})

module.exports = router;