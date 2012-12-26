var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
	
app.configure(function(){
  app.set('port', process.env.PORT || 1337);
  app.set('views', __dirname + '/views');
  app.use(express.static(__dirname + '/public'));
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
});

app.get('/',function(req, res){
  res.render('index', {title:'Socket.io chat'}); 
});

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var nicknames = {};

io.sockets.on('connection', function(socket) {
  socket.on('nickname', function(nick, callback){
    if(nicknames[nick]) {
      callback(false);
    } else {
      callback(true);
      socket.set('nickname', nick, function(){
        nicknames[nick] = nick;
        socket.broadcast.emit('announcement', nick + ' connected');
        io.sockets.emit('users-online', nicknames);
      });
    }
  });
  
  socket.on('user-msg', function(msg){
    socket.get('nickname',function(err,nick){
      socket.broadcast.emit('user-msg', nick, msg);
    });
  });
  
  socket.on('disconnect', function(){
    //TODO handle user disconnect
    //Hint: check is user already enter a nickname and was logged in
    //Hint 2: remove user from nicknames
    //Hint 3: make announcement
    //Hint 4: send updated list of users to everyone
  });
});