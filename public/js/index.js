var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server !');

    socket.emit('createMessage', {
        from : "juliaElen@gmail.com",
        body: "Hey nice to meet you too Amadou ",
    });

});

socket.on('disconnect', function () {
    console.log('Disconnected from to the server !');
});

socket.on('newMessage', function (Data) {
   console.log('New Message  :', Data); 
});