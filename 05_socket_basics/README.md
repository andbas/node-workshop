Node.js Training Socket.io basics
===========================

File: package.json
------------------
1.  add necessary dependencies

File: app.js
------------
Hint: http://pastebin.com/TG2ig69r

1.  declare a port and add listener for server start event
2.  emit 'status' message (send object with fields 'message')
3.  add listener to a socket event 'date-request'
4.  in listener get current date and emit it to user as 'date-response' request


File: views/index.jade
----------------------
Hint: http://pastebin.com/PDphMGeR

1.  Load socket.io library from a local server (hint: '/socket.io/socket.io.js'
2.  Create a socket and make a connection to a socket.io server (localhost)
3.  Write handler for 'status' event which should replace using $('#status').html(msg) status message, where msg is a message recieved from server
4.  Write handler for 'date-response' event which should add date recieved from server into #messages div (hint: $('#messages').append('<div class="line">' + data.date + '</div>');)
5.  Emit 'date-request' message to server
