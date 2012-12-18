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
  socket.on('date-request', function(data){
    var current = new Date();
    socket.emit('date-response',{ date: current.toString() });
  });
});