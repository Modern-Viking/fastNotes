const express = require("express");
const path = require("path");
const fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/frontend"));

// require("/backend/routes/apiRoutes")(app);
require("./backend/routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });