var express = require('express'),
    app = express();
	
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
});

app.get('/',function(req, res) {
  res.render('index',{ title: 'Node.js workshop: Jade stage'}); 
});

app.listen(1337);
console.log('Listening on port 1337');
