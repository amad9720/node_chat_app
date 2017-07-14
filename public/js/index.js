var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server !');
});

socket.on('disconnect', function () {
    //console.log('Disconnected from to the server !');
});

socket.on('newMessage', function (Data) {
   console.log('New Message  :', Data); 
   var $li = $('<li></li>');
   $li.text(`${Data.from}: ${Data.content}`);
   $li.appendTo($('#message'));
});

socket.on('login', function(data) {
    console.log("Admin message", data);
});

socket.on('userJoined', function(data) {
    console.log("Admin message", data);
});

$('#message-form').on('submit', function(e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        body: $("form input[name=message").val()
    }, function() {

    });
});