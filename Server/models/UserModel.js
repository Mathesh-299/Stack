const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

// Correct the model name
const User = mongoose.model("User", userSchema);

module.exports = User;
