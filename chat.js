var express = reauire('express');
var app = express();
var server = reauire('http').createServer(app);
var io = reauire('socket.io').listen(server);

server.listen(80,'192.168.0.107');

app.get('/',function(req,res));
res.sendFile(__dirname+'/index.html')