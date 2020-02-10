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
    app.delete("/api/notes/:id", function(req, res) {
        let noteId = req.params.id;
    
        fs.readFile("./backend/db/db.json", "utf8", (err, data) => {
          if (err) throw err;
          const database = JSON.parse(data);
          const newdB = database.filter(function(note) {
            return note.id != noteId;
          });
    
          fs.writeFile("./backend/db/db.json", JSON.stringify(newdB, null, 2), err => {
            if (err) throw err;
            res.send("./backend/db/db.json");
          });
        });
      });
};