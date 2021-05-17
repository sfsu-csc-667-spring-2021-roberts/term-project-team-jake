var express = require("express");
var router = express.Router();
const Games = require("../../db").Games;
const { isAuth } = require("../../authorization/isAuth");

router.get('/logout', (request, response) => {
    request.logout();
    response.redirect('/');
  });

router.get("/", isAuth, function (req, res, next) {
  if (req.user) {
    res.render("lobby.pug", { username: req.user.username });
  } else {
    redirect("/login");
  }
});

module.exports = router;
