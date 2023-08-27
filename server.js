const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const routes = require('./routes/api');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social', {
}).then(() => {
  console.log('Connected to MongoDB');

  // Include API routes from api.js
  app.use('/api', routes);

  // Start Server
  app.listen(PORT, () => {
    console.log(`🌍 Connected on port:${PORT}`);
  });
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1);
});
