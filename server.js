// Importing express
const express = require('express');
// Importing the json file located in /db
const db = require('./db/db.json');


// Initialize Express
const app = express();
const path = require('path'); // Importing the path module to use res.sendFile
const PORT = 3001;

// Create middleware to use static files in the public folder
app.use(express.static('public'));


// * Get requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Get notes from current db
app.get('/api/notes', (req, res) => {
    res.json(`${req.method} request received to display a note`);
    console.info(`${req.method} request received to display a note`);
});

// * POST requests
// Create new notes from client
app.post('/api/notes', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a note`);
    // Log request to the terminal
    console.info(`${req.method} request received to add a note`);
});


// * GET the data from the db.json file
app.get('/db', (req, res) => res.json(db))

// * POST data to the db.json file
app.post('/db', (req, res) => res.json(db))

// Have the server listening on port 3001
app.listen(PORT, () =>
    console.log(`Listening on: http://localhost:${PORT} !`)
);