var socket;
var playerNum;
var deckImage = -1;
var deck = [];
var players = [];


function preload()
{
	deckImage = loadImage('public/images/deck-images/Uno Deck.png');
	initializeDeck();
	for(let i = 0; i < 4; i++) {
		players.push(new Player(100, (i+1) * 100));
	}
}

