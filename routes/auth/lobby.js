var express = require("express");
var router = express.Router();
const Games = require("../../db").Games;
const { isAuth } = require("../../authorization/isAuth");

router.get('/logout', isAuth, (request, response) => {
    request.logout();
    response.redirect('/');
  });

router.get("/", isAuth, function (req, res, next) {
    res.render("lobby.pug", { username: req.user.username });
});

module.exports = router;
