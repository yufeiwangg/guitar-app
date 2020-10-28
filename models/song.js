const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timePracticedSchema = new Schema({
    hours: Number, 
    minutes: Number, 
    date: {
        type: Date,
        default: Date.now
    }
})

const noteSchema = new Schema({
    note: String
})

const songSchema = new Schema({
    song: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number, 
        min: 0, 
        max: 5
    },
    timePracticed: [timePracticedSchema],
    notes: [noteSchema],
    skillsNeeded: [{type: Schema.Types.ObjectId, ref: "Skill"}]
})

module.exports = mongoose.model('Song', songSchema);