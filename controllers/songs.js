const User = require('../models/user');
const Song = require('../models/song');
const Skill = require('../models/skill');

function newSong(req, res){
    res.render('songs/new');
}

function create(req, res){
    req.user.song.push(req.body);
    req.user.save(function(err){
        res.redirect('/');
    });
}

//need to fix populating the skills owo
async function showSong(req, res){
    const skills = req.user.skill;
    const songs = req.user.song;
    const song = songs.id(req.params.id);
    res.render('songs/show', {song, skills});
}

async function newPractice(req, res){
    const songs = req.user.song;
    const song = songs.id(req.params.id);
    res.render('songs/practice', {song});
}
//As you can see, we simply push in an object that's compatible with the embedded document's schema, call save on the parent doc, and redirect to wherever makes sense for the app.
function createPractice(req, res){
    const songs = req.user.song;
    const song = songs.id(req.params.id);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    song.timePracticed.push(req.body);
    req.user.save(function(err) {
        res.redirect(`/songs/${song._id}`);
    })
}


//when i add stuff, it says undefined???
//where is skillId coming from?
async function addSkill(req, res){
    const skills = req.user.skill;
    const songs = req.user.song;
    const song = songs.id(req.params.id);
    const skill = skills.id(req.body.skillId);
    
    console.log(skill);
    song.skillsNeeded.push(skill);
    req.user.save(function(err){
        res.redirect(`/songs/${song._id}`);
    });
    
    // Song.findById(req.params.id, function(err, song) {
    //     song.skillsNeeded.push(req.body.skillId);
    //     song.save(function(err) {
    //       res.redirect(`/songs/${song._id}`);
    //     });
    //   });
}

module.exports = {
    newSong, 
    create,
    showSong,
    createPractice,
    newPractice, 
    addSkill
}