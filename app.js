var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log("Listening on port %s...", server.address().port);
});