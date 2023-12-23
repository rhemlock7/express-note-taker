const notes = require('express').Router();

// * GET Requests
notes.get('/', (req, res) => {
    res.json(`${req.method} request received to display a note`);
    console.info(`${req.method} request received to display a note`);
});

// * POST Requests
notes.post('/', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a note`);
    // Log request to the terminal
    console.info(`${req.method} request received to add a note`);
});