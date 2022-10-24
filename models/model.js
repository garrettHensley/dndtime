const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    weekdays: {
        required: true,
        type: Array
    }
})

module.exports = mongoose.model('Data', dataSchema)