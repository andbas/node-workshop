var express = require('express'),
    app = express();

app.get('/',function(req, res) {
  res.send("Hello, Express!");
});

app.listen(1337);
console.log('Listening on port 1337');
