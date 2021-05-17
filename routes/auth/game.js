var express = require('express');
var app = express();
const Games = require('../../db').Games;
const {isAuth} = require('../../authorization/isAuth');

router.get("/", isAuth, function (req, res, next) {
    res.render('game.pug');
});

console.clear();

const DECK = [
"0r", "0y", "0b", "0g", // 0
"1r", "1r", "1y", "1y", "1b", "1b", "1g", "1g", // 1
"2r", "2r", "2y", "2y", "2b", "2b", "2g", "2g", // 2
"3r", "3r", "3y", "3y", "3b", "3b", "3g", "3g", // 3
"4r", "4r", "4y", "4y", "4b", "4b", "4g", "4g", // 4
"5r", "5r", "5y", "5y", "5b", "5b", "5g", "5g", // 5
"6r", "6r", "6y", "6y", "6b", "6b", "6g", "6g", // 6
"7r", "7r", "7y", "7y", "7b", "7b", "7g", "7g", // 7
"8r", "8r", "8y", "8y", "8b", "8b", "8g", "8g", // 8
"9r", "9r", "9y", "9y", "9b", "9b", "9g", "9g", // 9
"d2r", "d2r", "d2y", "d2y", "d2b", "d2b", "d2g", "d2g", // Draw Two
"sr", "sr", "sy", "sy", "sb", "sb", "sg", "sg", // Skip
"rr", "rr", "ry", "ry", "rb", "rb", "rg", "rg", // Reverse
"w", "w", "w", "w", // Wild
"w+4", "w+4", "w+4", "w+4" // Wild +4
];

let availableCards = DECK;
let drawPileCards = [];
let discardPileCards = [];

function createHand(handSize = 7) {
  let hand = [];
  for (let i = 0; i < handSize; i++) {if (window.CP.shouldStopExecution(0)) break;
    let cardIndex = Math.floor(Math.random() * availableCards.length);
    let card = availableCards.splice(cardIndex, 1)[0];
    hand.push(card);
  }window.CP.exitedLoop(0);
  return hand;
}

module.exports = router;