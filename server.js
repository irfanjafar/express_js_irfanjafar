const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

require("./app/routes/main.routes")(app);

app.use(express.static("app/public"));

const port = 8080;
app.listen(port, () => {
  console.log(`server is running on http://localhost ${port}`);
});
