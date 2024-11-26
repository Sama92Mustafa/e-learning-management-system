const express = require('express');
const authRoutes = require('./authRoutes');
const courseRoutes = require('./courseRoutes');

const router = express.Router();

// Authentication routes
router.use('/auth', authRoutes);

// Course and lesson routes
router.use('/', courseRoutes);

module.exports = router;
