var data = require("../db/db.json");
const fs = require("fs");

module.exports = function(app) {
    
    app.get("/api/notes", function (req, res) {
        return res.json(data);
    });

    app.post("/api/notes", function (req, res) {
        let newData = res.body
        fs.appendFile('../db/db.json', newData, function (err) {
            if (err) throw err;
            console.log('Updated!');
        });
        data.push(newData);
        res.json([body]);
    });

    app.delete("/api/notes/:id"), function (req, res){
        res.send
    }
}