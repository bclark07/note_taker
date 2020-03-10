// Requiring path to so we can use relative routes to our HTML files
// var path = require("path");
// var db = require("../models"); should automatically recognize public and find the right files

//routing
module.exports = function(app) {
  app.get("/notes", function(req, res) {
    console.log("notes page");
  });
  // res.render("notes");
  //     res.sendFile(path.join(__dirname, "../public/login.html"));
};
//
//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/members", isAuthenticated, function(req, res) {
//     res.render("index");
//   });

//   app.get("/saved", isAuthenticated, function(req, res) {
//     console.log("start data");
//     db.Listings.findAll({ raw: true }).then(function(data) {
//       console.log(data);
//       res.render("saved", {
//         saved: data
//       });
//     });
//   });
// };
