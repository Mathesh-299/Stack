const express = require('express');
const router = express.Router();
const users = require('../models/userModel');

// Get all users
router.get('/all', async (req, res) => {
    try {
        const fetchedusers = await users.find();
        res.status(200).json(fetchedusers);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Add a new user
router.post('/add', async (req, res) => {
    try {
        const newuserdata = new users(req.body);
        const { name, about } = newuserdata;
        if (!name || !about) {
            return res.status(400).json({ message: "Name & About Required" });
        }
        const savedata = await newuserdata.save();
        res.status(200).json(savedata);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Edit a user by ID
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await users.findOne({ _id: id });
        if (!currentrecord) {
            return res.status(404).json({ message: "User not found!" });
        }
        const updateUser = await users.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete a user by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await users.findOne({ _id: id });
        if (!currentrecord) {
            return res.status(404).json({ message: "User not found!" });
        }
        await users.findByIdAndDelete(id);  // Corrected to use 'users'
        res.status(200).json({ message: "User Deleted!" });
    } catch (error) {
        res.status(500).json(error);  // Corrected error variable
    }
});

module.exports = router;
