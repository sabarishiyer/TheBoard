﻿//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

var http = require("http");
var server = http.createServer(function (req, res) {
    console.log(req.url);
    res.write("<html> <h1> " + req.url +  "</h1> </html>");
    res.end();
});

server.listen(3000);
