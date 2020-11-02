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

const skillSchema = new Schema({
    skill: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number, 
        min: 0, 
        max: 5
    },
    timePracticed: [timePracticedSchema],
})
//i want to have multiple notes to add for myself to reference

module.exports = mongoose.model('Skill', skillSchema);