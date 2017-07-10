var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server !');
});

socket.on('disconnect', function () {
    //console.log('Disconnected from to the server !');
});

socket.on('newMessage', function (Data) {
   console.log('New Message  :', Data); 
});

socket.on('login', function(data) {
    console.log("Admin message", data);
});

socket.on('userJoined', function(data) {
    console.log("Admin message", data);
});