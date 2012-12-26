Node.js Training Socket.io features
===========================

File: views/index.jade
----------------------
1.  emit 'date-request' message to server with callback (acknowledgement) function
2.  add handler for socket.io event 'broadcasting' event which will append recieved date to #message div
3.  emit 'broadcast' event and send object with 'to' and 'msg' fields. Please set value for 'to' as string 'others', 'msg' field you can get from #msg input.
4.  emit 'broadcast' event and send object with 'to' and 'msg' fields. Please set value for 'to' as string 'everyone', 'msg' field you can get from #msg input. 

File: app.js
------------
1.  rework 'data-request' handler to work with callback (acknowledgement) function instead of emit 'date-response' event
2.  write a 'broadcast' event handler