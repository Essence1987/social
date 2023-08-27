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

// GET a single user by its _id and populated thought and friend data
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        .populate('thoughts')
        .populate('friends');
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// POST to create a new user

router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// POST to create a new friend
router.post('/users/:userId/friends/:friendId', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        );
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Put to update a user by its _id

router.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE to remove user by its _id

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        // remove user's associated thoughts
        await Thought.deleteMany({ username: user.username });
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});



