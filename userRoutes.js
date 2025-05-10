const express = require('express');
const router = express.Router();
const User = require('./User.js')

// POST a new username
router.post('/', async(req, res) => {
    const { username } = req.body;
    try{
        const newUser = new User({ username });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
});
// GET all usernames
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;