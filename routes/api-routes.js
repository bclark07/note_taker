// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

// var notesData = require("../db/test");
var notesData = require("../db/db");
var fs = require("fs");
var util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    // console.log(notesData);
    res.json(notesData);
  });

  app.post("/api/notes", function(req, res) {
    req.body.id = req.body.title;
    notesData.push(req.body);
    res.json(notesData);
    writeFileAsync("./db/db.json", JSON.stringify(notesData));
  });

  app.delete("/api/notes/:id", function(req, res) {
    var index = notesData.map(note => note.id).indexOf(req.params.id);
    notesData.splice(index, 1);
    res.json(notesData);
    writeFileAsync("./db/db.json", JSON.stringify(notesData));
  });
};
