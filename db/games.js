const db = require('./connection');

const create = (name, numberOfPlayers, userId) =>
    db
      .one('INSERT INTO games (game_name, num_of_players) VALUES ($1, $2) RETURNING id', [name, numberOfPlayers])
      .then(({ id }) => addPlayer(id, userId));

const addPlayer = (gameId, userId) =>
    db.one('INSERT INTO game_users VALUES ($1, $2) RETURNING game_id AS id', [gameId, userId]);

const findById = (id) =>
    Promise.all([
        db.one('SELECT * FROM games WHERE id=$1', [id]),
        db.any(
            'SELECT users.id, users.username, users.email FROM game_users, users WHERE game_users.game_id=$1 AND game_users.players=users.id',
            [id]
        ),
    ]).then(([game, players]) => ({ ...game, players }));

module.exports = { create, addPlayer, findById };