'use strict';

const db = require('../database');
const Sequelize = require('sequelize');

//You don't need pokemon
const Pokemon = require('./pokemon');

// SCHEMA: set up name, badges (array)

const Trainer = db.define('trainer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  badges: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
});

// INSTANCE METHOD(S) - NO ARROW FUNCTIONS:

Trainer.prototype.countBadges = function() {
  return this.badges.length;
};

// CLASS METHOD(S):

// HOOKS:

// ASSOCIATIONS: (hasMany required)

module.exports = Trainer;
