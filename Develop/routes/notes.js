const router = require('express').Router();
const fs = require('fs');
const { resourceLimits } = require('worker_threads');
const { v4:uuidv4 } = require('uuid') 

// GET Route for retrieving all the notes
router.get('/', (req, res) => {
    fs.readFile('./db/db.json', "utf-8", (err, data) => {
        res.send(data);
    })
});

// POST Route for submitting notes
router.post('/', (req, res) => {
    fs.readFile('./db/db.json', "utf-8", (err, data) => {
    const notes = JSON.parse(data);
    notes.push({...req.body, id:uuidv4()});
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
        res.send(req.body);
    })    
    })
});

// DELETE Route for submitting notes
router.delete('/:id', (req, res) => {
    fs.readFile('./db/db.json', "utf-8", (err, data) => {
    const notes = JSON.parse(data);
    const filteredNotes = notes.filter (note => note.id !== req.params.id);
    fs.writeFile('./db/db.json', JSON.stringify(filteredNotes), (err) => {
        res.send(200);
    })    
    })
});

module.exports = router;
