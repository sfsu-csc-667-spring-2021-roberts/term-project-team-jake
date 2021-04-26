const db = require('./connection');

const findById = (id) => {
  return db.one('SELECT id, username, email FROM users WHERE id=$1', [id]);
};

const findByEmail = (email) => {
  return db.one('SELECT * FROM users WHERE email=$1', [email]);
};

const create = (username, email, password) => {
  return db.one('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email', [
    username,
    email,
    password,
  ]);
};

module.exports = { findById, findByEmail, create };