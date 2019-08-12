'use strict';

const db = require('../db');
const Sequelize = require('sequelize');

const Trainer = require('./trainer');

// SCHEMA: set up name (string), pokedexNum (integer), element (string), description (text)

const Pokemon = db.define('pokemon', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pokedexNum: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  element: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

// INSTANCE METHOD(S) - NO ARROW FUNCTIONS:

// CLASS METHOD(S) - not sure if async/await required?:

Pokemon.findByName = async (name) => {
  return (
    await Pokemon.findOne({
      where: {
        name,
      }
    })
  );
};

// HOOKS:

// ASSOCIATIONS: (belongsTo required)

Pokemon.belongsTo(Trainer);

module.exports = Pokemon;