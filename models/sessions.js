const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    weekOfDate: {
        required: true,
        type: String,
    },
    finalSchedule: {
        required: false,
        type: String,
    },
    usersSubmitted: {
        type: Array,
        required: true,
        default: [],
    },
    created: {
        type: Date,
        required: true,
        default: new Date()
    }
})

module.exports = mongoose.model('Session', dataSchema)