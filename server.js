//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

var http = require("http");
var express = require("express");
var controllers = require("./controllers");
var app = express();
var cors = require("cors");


app.set("view engine", "vash");
app.use(express.json());
app.use(cors());

//map the routes
controllers.init(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
})

