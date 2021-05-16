const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const Games = require('../../db').Games;

router.post('/create', (request, response) => {
  const { gameName = 'New Game', numberOfPlayers = 4 } = request.body;
  const { id: userId } = request.user;

  Games.create(gameName, numberOfPlayers, userId)
    .then(({ id }) => {
      response.redirect(`/games/${id}`);
    })
    .catch((error) => response.json(error));
});

router.get('/:id', (request, response) => {
  const { id } = request.params;
  const { id: userId } = request.user;

  Games.findById(id)
    .then((game) => {
      console.log(game);
      if (game.players.length < game.number_of_players) {
        response.redirect(`/games/${id}/lobby`);
        return Promise.reject('done');
      } else {
        return game;
      }
    })
    .then((game) => {
      response.render('/game', {
        game: {
          ...game,
          players: game.players
            .sort((a, b) => a.player_order > b.player_order)
            .map((player) => {
              if (player.id === userId) {
                return { ...player, current: true };
              } else {
                return player;
              }
            }),
        },
      });
    })
    .catch((error) => console.log(error));
});

router.get('/:id/join', (request, response) => {
  const { id } = request.params;
  const { id: userId } = request.user;

  Games.findById(id)
    .then((game) => {
      if (game.players.length === game.number_of_players) {
        response.redirect('/lobby');
        Promise.reject('done');
      } else {
        return Games.addPlayer(id, userId);
      }
    })
    .then(({ id }) => response.redirect(`/games/${id}/lobby`))
    .catch((error) => {});
});

router.get('/:id/lobby', (request, response) => {
  const { id } = request.params;

  Games.findById(id)
    .then((game) => {
      console.log(game);
      return game;
    })
    .then((game) => response.render('/game-lobby', { ...game }));
});

module.exports = router;