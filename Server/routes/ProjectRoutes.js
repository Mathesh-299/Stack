const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Use singular and capitalized

// Get all users
router.get('/all', async (req, res) => {
    try {
        const fetchedUsers = await User.find();
        res.status(200).json(fetchedUsers);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Add new user
router.post('/add', async (req, res) => {
    try {
        const newUserData = new User(req.body);
        const { name, about } = newUserData;
        if (!name || !about) {
            return res.status(400).json({ message: "Name & About Required" });
        }
        const saveData = await newUserData.save();
        res.status(200).json(saveData);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Edit user
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentRecord = await User.findOne({ _id: id });
        if (!currentRecord) {
            return res.status(404).json({ message: "User not found!" });
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete user
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentRecord = await User.findOne({ _id: id });
        if (!currentRecord) {
            return res.status(404).json({ message: "User not found!" });
        }
        await User.findByIdAndDelete(id); // Fix capitalization here
        res.status(200).json({ message: "User Deleted!" });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
