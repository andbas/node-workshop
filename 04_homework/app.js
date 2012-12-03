var express = require('express'),
    app = express();

var users = [
    { id: 1, name: 'bob', score: 1000 }
  , { id: 2, name: 'joe', score: 22 }
  , { id: 3, name: 'stan', score: 550 }
];
	
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  //TODO Add application logger
  // hint: http://expressjs.com/api.html#app.use
  //SHOULD_BE_REMOVED
  app.use(express.logger('dev'));
});

app.get('/',function(req, res){
  res.render('index', {title:'Users', users: users});
});

app.get('/users/:name',function(req, res) {
  //TODO populate username variable with date recieved from :name param
  // hint: http://expressjs.com/api.html#req.params
  //SHOULD_BE_REMOVED req.param('name');
  var username = req.param('name');
  
  //TODO render logic using findUserByName(username, callback)
  // hint: http://expressjs.com/api.html#res.render
  //SHOULD_BE_REMOVED 
  findUserByName(username, function(err, user){
    if(user){
	  res.render('user/show',{ title: 'User statistics', user: user}); 
	} else {
	  res.redirect('/');
	}
  });
});

/**
 * Functions which works like common db request with node.js
 *
 * @param username 
 * @param callback function with signature callback(err,user)
 */
function findUserByName(username, callback) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.name === username) {
      return callback(null, user);
    }
  }
  return callback(null, null);
}

app.listen(1337);
console.log('Listening on port 1337');