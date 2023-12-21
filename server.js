// Importing express
const express = require('express');
// Importing the json file located in /db
const db = require('./db/db.json');

// Initialize Express
const app = express();
const PORT = 3001;

// Create middleware to use files in the public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(
        'Use the API endpoint at link'
    )
})

// Get the data from the db.json file
app.get('/db', (req, res) => res.json(db))

// Have the server listening on port 3001
app.listen(PORT, () =>
    console.log(`Listening on: http://localhost:${PORT} !`)
);