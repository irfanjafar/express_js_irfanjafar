module.exports = (app) => {
  var express = require("express");
  var path = require("path");
  var apps = express.Router();

  let reqPath = path.join(__dirname, "../");

  apps.get("/", function (req, res) {
    res.send("Hello World from folder route");
  });

  apps.get("/static", function (req, res) {
    res.sendfile(reqPath + "/views/index.html");
  });

  app.use("/", apps);
};
