const path = require("path");
const fs = require("fs");

module.exports = function(app) {
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../frontend/index.html"));
  });
  
  app.get("/assets/frontendAssets/style/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "../../assets/frontendAssets/style/styles.css"));
  });
  
  app.get("/assets/frontendAssets/js/index.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../../assets/frontendAssets/js/index.js"));
  });
  
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../../frontend/notes.html"));
  });
};