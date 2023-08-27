const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/');

// Set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// Use Routes
app.use('/api', routes);

// Start Server
app.listen(PORT, () => {
    console.log(`🌍 Connected on port:${PORT}`);
});
