var express = require('express');
var path=require('path');
var app = express();

//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 });

 app.get('/hr', function (req, res) {
    res.sendFile(path.join(___dirname + '/hr.html'));
 });

 app.get('/account', function (req, res) {
    res.sendFile(path.join(___dirname + '/account.html'));
 });

 app.get('/project', function (req, res) {
    res.sendFile(path.join(___dirname + '/project.html'));
 });

var server = app.listen(7667, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server started on http://localhost:8081", host, port)
});
