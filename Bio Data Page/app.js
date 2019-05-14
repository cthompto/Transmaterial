var http = require('http');
var fs = require('fs');
var count = 0;

var util  = require('util'),
    spawn = require('child_process').spawn,
    py    = spawn('python', ['heart.py']);
    py2   = spawn('python', ['temp.py']);

var server = http.createServer(function(req,res){
    fs.readFile('./index.html', function(error, data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data, 'utf-8');
    });
}).listen(3000);

console.log('Server is running');

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('User connected');
    py.stdout.on('data', (data) => {
      socket.emit('news',data.toString('utf8'));
    });
    py2.stdout.on('data', (data) => {
      socket.emit('news2',data.toString('utf8'));
    });
});