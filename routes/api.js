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

// GET all thoughts

router.get('/thoughts', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET a single thought by its _id

router.get('/thoughts/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        res.json(thought);
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

// POST to create a new thought

router.post('/thoughts', async (req, res) => {
    try {
      const thought = await Thought.create(req.body);
      await User.findByIdAndUpdate(
        req.body.userId,
        { $push: { thoughts: thought._id } }
      );
      res.json(thought);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  // POST to create a new reaction stored in a single thought's reactions array field
  router.post('/thoughts/:thoughtId/reactions', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: { reactions: req.body } },
            { new: true }
        );
        res.json(thought);
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

// Put to update a thought by its _id
router.put('/thoughts/:id', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(thought);
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

// DELETE to remove a friend from a user's friend list
router.delete('/users/:userId/friends/:friendId', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } },
            { new: true }
        );
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE to remove a thought by its _id

router.delete('/thoughts/:id', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
});

// DELETE to remove a reaction by the reaction's reactionId value
router.delete('/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true }
        );
        res.json(thought);
    } catch (error) {
        res.status(500).json(error);
    }
});

