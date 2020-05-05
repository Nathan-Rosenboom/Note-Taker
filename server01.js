const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const notes = require("./db/db.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
//----Routes----
// Add new notes
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Wild card
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Displays all notes
app.get("/api/notes", function (req, res) {
    return res.json(notes);
});

app.post("/api/characters", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;
    fs.appendFile('./db/db.json', newNote, function (err) {
        if (err) throw err;
        console.log('Updated!');
    });
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();

    console.log(newNote);

    db.push(newNote);

    res.json(newNote);
});