var express = require('express');
var router = express.Router();
const songsCtrl = require('../controllers/songs');

/* GET users listing. */
router.get('/new', songsCtrl.newSong);
router.get('/:id/practice', songsCtrl.newPractice);
router.get('/:id', songsCtrl.showSong);

router.post('/', songsCtrl.create);
router.post('/:id/practice/create', songsCtrl.createPractice);

router.post('/:id/update', songsCtrl.update);

router.delete('/:id', songsCtrl.delete);
module.exports = router;
