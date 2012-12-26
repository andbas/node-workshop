var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
	
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
});

app.get('/',function(req, res){
  res.render('index', {title:'Socket.io basics'});
});

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

io.sockets.on('connection', function(socket) {
  socket.emit('status',{ message: "OK" });
  
  //TODO rework 'data-request' handler to work with callback (acknowledgement) function instead of emit 'date-response' event
  //Hint: http://pastebin.com/2G9yA4Ka
  socket.on('date-request', function(data){
    var current = new Date();
    socket.emit('date-response',{ date: current.toString() });
  });
  
  //TODO write a 'broadcast' event handler
  //Hint: 'to' field of received object could be 'everyone' or 'others'
  //Hint 2: http://pastebin.com/a37R1b50
});