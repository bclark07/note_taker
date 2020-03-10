// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var notesData = require("../db/test");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    console.log("get Notes");
    res.json(notesData);
  });

  app.post("/api/notes", function(req, res) {
    notesData.push(req.body);
    res.json(notesData);
  });

  app.delete("/api/notes/:id", function(req, res) {
    console.log("delete page"); //need delete code here - hwo get id?
    res.json(notesData);
  });
};

//post handleNoteSave
//get handleNoteView, handleNewNoteView
//delete handleNoteDelete
