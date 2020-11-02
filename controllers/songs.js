function newSong(req, res){
    res.render('songs/new');
}

function create(req, res){
    req.user.song.push(req.body);
    req.user.save(function(err){
        res.redirect('/');
    });
}

async function showSong(req, res){
    const songs = req.user.song;
    const song = songs.id(req.params.id);
    res.render('songs/show', {song});
}

async function newPractice(req, res){
    const songs = req.user.song;
    const song = songs.id(req.params.id);
    res.render('songs/practice', {song});
}

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

//I'm not sure why there's a < before the button, but at least the functionality works. 
function deleteSong(req, res){
    req.user.song.pull(req.params.id);
    req.user.save();
    res.redirect('/');
}

function update(req, res){
    const songs = req.user.song;
    const song = songs.id(req.params.id);
    song.song = req.body.song;
    song.difficulty = req.body.difficulty;
    req.user.save();
    // keep these lines, make sure you remember what they do!
    //req.params gets the url
    //req.body gets the body submitted in the form.
    // console.log(req.params);
    // console.log(req.body);
    res.redirect('/');
}
module.exports = {
    newSong, 
    create,
    showSong,
    createPractice,
    newPractice, 
    delete: deleteSong,
    update
}