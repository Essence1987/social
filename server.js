const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

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

// Include API routes from api.js
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`🌍 Connected on port:${PORT}`);
});
