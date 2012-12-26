var express = require('express')
  , app = express()
  //TODO add necessary declarations
  ;
	
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
});

app.get('/',function(req, res){
  res.render('index', {title:'Socket.io basics'});
});

//TODO declare a port and add listener for server start event

io.sockets.on('connection', function(socket) {
  //Handle Socket's connection event
  
  //TODO emit 'status' message (send object with fields 'message')
  
  //TODO add listener to a socket event 'date-request'
  
    //TODO get current date and emit it to user as 'date-response' request
});