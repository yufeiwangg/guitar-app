const User = require('../models/user');
const Song = require('../models/song');
const Skill = require('../models/skill');





async function index(req, res){
    const songs = await Song.find({});
    
    res.render('index', {songs, title: "guitar", user: req.user});
}

module.exports = {
    index
}