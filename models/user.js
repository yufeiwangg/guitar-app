const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Skill = require('./skill');
const Song = require('./song');

var userSchema = new Schema({
    name: String,
    email: String,
    googleId: String, 
    skill: [Skill.schema], 
    song: [Song.schema]
  }, {
    timestamps: true
  });

module.exports = mongoose.model('User', userSchema);