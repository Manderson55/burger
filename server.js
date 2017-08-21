// Dependencies
// =============================================================
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

// Sets up the Express App  - tells Node we are creating an Express Server
// =============================================================
var app = express();

// override ????????
app.use(methodOverride("_method"))

// giving access to css, images, etc. not specified in routing
app.use(express.static("public"));

// this PORT variable allows us to use our local host(3000 in this case)
// or whatever port is defined by the deployment site so we don't have to 
// reconfigure it
var PORT = process.env.PORT || 3000;

// BodyParser makes it easy for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" })); 
app.use(bodyParser.urlencoded({ extended: false })); 

// ================================================================================
// ROUTES
// ================================================================================

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var routing = require('./controllers/burgers_controller.js');
app.use('/', routing);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
