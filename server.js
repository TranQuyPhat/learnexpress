var express = require("express");
var app = express();
const path = require("path");
app.use("/", express.static(path.join(__dirname, "./public")));
app.get("/", (req, res, next) => {
  var linkFile = path.join(__dirname, "./public/html/home.html");
  res.sendFile(linkFile);
});
app.listen(3000, () => {
  console.log("start server !!!");
});
