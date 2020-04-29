// Dependancies
const express = require('express');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
var path = require('path');

// express app with a port
var app = express();
var PORT = 3000;

// body parsing, static, and routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});