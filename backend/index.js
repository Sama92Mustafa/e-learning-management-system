require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const routesController = require('./routes/routesController');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', routesController);

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the E-Learning Management System API');
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));