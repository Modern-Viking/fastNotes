const path = require("path");
const fs = require("fs");

module.exports = function(app) {

    //Get API route
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

    //POST API route
app.post("/api/notes", function(req, res) {
    let newNote = req.body;

    fs.readFile("./backend/db/db.json", "utf-8", (err, data) => {
      if (err) throw err;
      let database = JSON.parse(data);
      database.push(newNote);
      let idKey = 1
      for( let i = 0; i < database.length; i++){
        database[i].id = idKey++;
      }

      fs.writeFile("./backend/db/db.json", JSON.stringify(database), function(err){
        if (err) throw err;
        return res.status(200).send("Note added");
      })
    });
  });

    //Delete API route
};