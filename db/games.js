const db = require('./connection');

const allGames = async () => {
    return await db.any('SELECT * FROM games');
}
const create = (name, numOfPlayers, action) => {
    return db.one('INSERT INTO games ("game_Name", num_of_players, action) VALUES ($1, $2, $3) RETURNING id', [name, numOfPlayers, action]);
}

const addPlayer = (gameId, userId) => {
    return db.one('INSERT INTO game_users(game_id, players) VALUES ($1, $2)', [gameId, userId]);
}

const findById = (id) => {
    return db.one('SELECT id, username, email FROM users WHERE id=$1', [id]);
}

module.exports = { allGames, create, addPlayer, findById };