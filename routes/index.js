// Use express's router functionality
const router = require('express').Router();

// Import our modular routers for /api/notes
const notesRouter = require('./notes');

// Middleware to send /api/notes route to notes.js
app.use('/notes', notesRouter);

// Export routes to use in other pages
module.exports = router;

