const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    weekdays: {
        required: true,
        type: Array
    },
    weekOfDate: {
        required: true,
        type: String,
    },
    created: Date,
})

module.exports = mongoose.model('Data', dataSchema)