var data = require("../db/db.json");

module.exports = function(app) {
    
    app.get("/api/notes", function (req, res) {
        return res.json(data);
    });

    app.post("/api/notes", function (req, res) {
        data.push(req.body);
        res.json(data);
    });
}