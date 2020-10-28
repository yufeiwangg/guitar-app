var express = require('express');
var router = express.Router();
const skillsCtrl = require("../controllers/skills");

router.get('/new', skillsCtrl.newSkill);
router.get('/:id/practice', skillsCtrl.newPractice);
router.get('/:id', skillsCtrl.showSkill);

router.post('/', skillsCtrl.create);
router.post('/:id/addsong', skillsCtrl.addSong);
router.post('/:id/practice/create', skillsCtrl.createPractice);

module.exports = router;
