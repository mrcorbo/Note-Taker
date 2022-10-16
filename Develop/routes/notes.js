const notes = require('express').Router();
const fs = require('fs');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    fs.readFile('./db/db.json', "utf-8", (err, data) => {
        res.send(data);
        
    })
});

// POST Route for submitting notes
notes.post('/', (req, res) => {
    fs.readFile('./db/db.json', "utf-8", (err, data) => {
        res.send(data);
        
    })
});

module.exports = notes;
