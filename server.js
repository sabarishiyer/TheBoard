//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

var http = require("http");
var express = require("express");
var bodyParser = require('body-parser');
var controllers = require("./controllers");
var app = express();


app.use(bodyParser.urlencoded({ entended :false}));
app.use(bodyParser.json());
app.set("view engine", "vash");


//map the routes
controllers.init(app);

app.listen(3000, function () {
    console.log('Listening on port 3000.');
})
