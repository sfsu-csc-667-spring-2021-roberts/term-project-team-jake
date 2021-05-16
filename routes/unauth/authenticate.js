var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const Users = require('../../db').Users;
const passport = require('../../authorization/authorization');
const {isAuth} = require('../../authorization/isAuth');


router.get('/logout', isAuth, (request, response) => {
    request.logout();
    response.redirect('/');
});

router.post("/login",
    passport.authenticate("local", {
      successRedirect: "/lobby",
      failureRedirect: "/login",
      failureFlash: true,
    })
);

router.post("/register", (request, response, next) => {
    const { username, email, password, password2 } = request.body;
    const errors = [];

    if (!username || !email || !password || !password2) {
        errors.push(["Please enter all fields"]);
    } else if (password.length < 8) {
        errors.push(["Password must be at least 8 characters"]);
    } else if (password !== password2) {
        errors.push(["Passwords do not match"]);
    }

    if (errors.length > 0) {
        response.render("register", { errors });
    } else {
        bcrypt
            .hash(password, 10)
            .then((hashedPassword) => Users.create(username, email, hashedPassword)
            .then((_) => {
                response.redirect("/login");
                })
            .catch((_) =>
                response.render("register", {
                    errors: ["Failed to create a new user."],
                })
            )
        );
    }
});

module.exports = router;