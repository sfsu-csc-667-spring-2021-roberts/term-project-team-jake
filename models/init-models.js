var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _cards = require("./cards");
var _game_cards = require("./game_cards");
var _game_users = require("./game_users");
var _games = require("./games");
var _test_table = require("./test_table");
var _users = require("./users");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var cards = _cards(sequelize, DataTypes);
  var game_cards = _game_cards(sequelize, DataTypes);
  var game_users = _game_users(sequelize, DataTypes);
  var games = _games(sequelize, DataTypes);
  var test_table = _test_table(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    SequelizeMeta,
    cards,
    game_cards,
    game_users,
    games,
    test_table,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
