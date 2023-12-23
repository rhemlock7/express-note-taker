// Use express's router functionality
const notes = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');
const { readFromFile } = require('../helpers/fsUtils');

// * GET Requests made by client
notes.get('/', (req, res) => {
    // Read the db json data and parse it to a json object
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// * POST Requests made by client
notes.post('/', (req, res) => {
    // Inform the client that their POST request was received
    res.json(`${req.method} request received to add a note`);
    // Log request to the terminal
    console.info(`${req.method} request received to add a note`);

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
                title,
                text,
                notes_id: uuid(),
        };

        // Obtain existing reviews
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                // Convert string into JSON object
                const parsedNotes = JSON.parse(data);

                // Add a new note
                parsedNotes.push(newNote);

                // Write updated notes back to the file
                fs.writeFile(
                    './db/db.json',
                    JSON.stringify(parsedNotes, null, 3),
                    (writeErr) =>
                        writeErr
                            ? console.error(writeErr)
                            : console.info('Successfully updated notes!')
                );
            }
        });
    }
});

module.exports = notes;