const mongoose = require('../database/db');
const Schema = mongoose.Schema;


const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type : Date,
        default : Date.now
    }
});


module.exports = mongoose.model('books', schema);