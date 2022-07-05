// init project
var express = require("express");
var path = require("path");
// Data is stored in the file `database.json` in the folder `db`.
// Note that if you leave your app public, this database file will be copied if
// someone forks your app. So don't use it to store sensitive information.
var app = express();
var bodyParser = require("body-parser");
const srcPath = __dirname;
// Using `public` for static files: http://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(srcPath, "public")));
// Use bodyParser to parse application/x-www-form-urlencoded form data
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// Create a new entry in the users table
app.post("/webhook", urlencodedParser, function(request, response) {
 console.log("REQUEST" ,request);
 console.log("RESPONSE" ,response);
 
});
app.get("/send", urlencodedParser, function(request, response) {
 
    response.send({
        name:"LE PHu Sang"
    })
 
});


// Serve the root url: http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(path.join(srcPath, "views", "index.html"));
});

// Listen on port 8080
var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});

