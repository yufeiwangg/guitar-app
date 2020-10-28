const User = require('../models/user');
const Song = require('../models/song');
const Skill = require('../models/skill');

function newSkill(req, res){
    res.render('skills/new');
}

function create(req, res){
    req.user.skill.push(req.body);
    req.user.save(function(err){
        res.redirect('/');
    });
}

//gotta pupulate the songs properly! come back to this!
async function showSkill(req, res){
    const skills = req.user.skill;
    const skill = skills.id(req.params.id);
    const songs = req.user.song;
    res.render('skills/show', {skill, songs});
}



async function newPractice(req, res){
    const skills = req.user.skill;
    const skill = skills.id(req.params.id);
    res.render('skills/practice', {skill});
}
//As you can see, we simply push in an object that's compatible with the embedded document's schema, call save on the parent doc, and redirect to wherever makes sense for the app.
function createPractice(req, res){
    const skills = req.user.skill;
    const skill = skills.id(req.params.id);
    console.log(skill);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      skill.timePracticed.push(req.body);
      req.user.save(function(err) {
          res.redirect(`/skills/${skill._id}`);
      })
}





// ------ doesn't work yet! ---------- //
async function addSong(req, res){
    Skill.findById(req.params.id, function(err, skill) {
        skill.songs.push(req.body.songId);
        skill.save(function(err) {
          res.redirect(`/skills/${skill._id}`);
        });
      });
}

module.exports = {
    newSkill,
    create,
    showSkill, 
    newPractice, 
    createPractice, 
    addSong
}