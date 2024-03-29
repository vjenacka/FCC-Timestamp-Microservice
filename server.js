// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();
const router = express.Router();
const timestamp = require("./timestamp");

const PORT = process.env.PORT || 3000;
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/timestamp/:query", (req, res) => {
  timestamp.parse(req, res);
});

// listen for requests :)
app.listen(PORT, function() {
  console.log("Your app is listening on port " + PORT);
});
