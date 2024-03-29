const db = require('./database');
const Trainer = require('../db/models/trainer');
const Pokemon = require('../db/models/pokemon');

// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models (which you should define in separate modules in this directory).
// Example:
//
// const Puppy = require('./puppy')
// const Owner = require('./owner')

// After you've required all of your models into this module, you should establish
// associations (https://sequelize-guides.netlify.com/association-types/) between them here as well!
// Example:
//
// Puppy.belongsTo(Owner)

Pokemon.belongsTo(Trainer);
Trainer.hasMany(Pokemon);

module.exports = {
  Trainer,
  Pokemon,
  db,
};
