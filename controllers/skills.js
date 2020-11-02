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


async function showSkill(req, res){
    const skills = req.user.skill;
    const skill = skills.id(req.params.id);
    res.render('skills/show', {skill});
}


async function newPractice(req, res){
    const skills = req.user.skill;
    const skill = skills.id(req.params.id);
    res.render('skills/practice', {skill});
}

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

function deleteSkill(req, res){
    req.user.skill.pull(req.params.id);
    req.user.save();
    res.redirect('/');
}

module.exports = {
    newSkill,
    create,
    showSkill, 
    newPractice, 
    createPractice, 
    delete: deleteSkill
}