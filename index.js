
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.set('origins', '*:*');

io.on('connection', function(socket){
  console.log('a user connected');  

  socket.on('sending', function(data){      
        console.log(data);
      
        io.emit('recieve', data);    
        if(data=="exit"){
        	socket.disconnect( console.log('sender disconnected'));
        }
  });
});

app.get('/', function (req, res) {


  res.sendfile(__dirname + '/index.html');
});

server.listen(3333, function(){
  console.log('listening on *:3333');
});