const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
});

const users = mongoose.model('User', userSchema); // Ensure this name is unique
module.exports = users;
