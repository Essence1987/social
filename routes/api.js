const router = require('express').Router();
const { User, Thought } = require('../models');

// GET all users

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Route to create a new user

router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

