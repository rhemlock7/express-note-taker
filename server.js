// Importing express
const express = require('express');
// Importing the json file located in /db
const db = require('./db/db.json');
// Send api routes to index.js within the routes folder
const api = require('./routes/index.js')

// Initialize Express
const app = express();
const path = require('path'); // Importing the path module to use res.sendFile
const PORT = 3001;

// Create middleware to use static files in the public folder
app.use(express.static('public'));

// Initialize express's ability to parse JSON data
app.use(express.json());

// Middleware to send /api routes to the proper routes folder
app.use('/api', api);

// * Get requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Have the server listening on port 3001
app.listen(PORT, () =>
    console.log(`Listening on: http://localhost:${PORT} !`)
);