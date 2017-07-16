var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server !');
});

socket.on('disconnect', function () {
    //console.log('Disconnected from to the server !');
});

socket.on('newMessage', function (Data) {
    var formatedTime = moment(Data.createdAt);

    var template = $('#message-template').html();
    var html = Mustache.render(template, {
        text: Data.content,
        from: Data.from,
        createdAt: formatedTime.format('h:mm a')  
    });
    $('#message').append(html);
});

socket.on('login', function(data) {
    console.log("Admin message", data);
});

socket.on('userJoined', function(data) {
    console.log("Admin message", data);
});

socket.on('newLocationMessage', function(data) {
    var formatedTime = moment(data.createdAt);
    var $li = $('<li></li>');
    var $a = $("<a target='_blank'>My current location</a>");
    $li.text(`${data.from} ${formatedTime.format('h:mm a')} :`);
    $a.attr("href",data.url);
    $li.append($a);
    $li.appendTo($('#message'));
});

$('#message-form').on('submit', function(e) {
    e.preventDefault();
    var messageTextBox = $("form input[name=message");
    socket.emit('createMessage', {
        from: 'User',
        body: messageTextBox.val()
    }, function() {
        messageTextBox.val('');
    });
});

var locationButton = $('#send-location');
locationButton.on('click', function(){
    if(!navigator.geolocation){
        return alert('Geolocation not supported by your browser.');
    }

    locationButton.attr('disabled','disabled').text('Sending location...');
    
    navigator.geolocation.getCurrentPosition(function(position){
        socket.emit('createLocationMessage', {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        });

        locationButton.removeAttr('disabled').text('Send location');

    },function(){
        alert('Unable to fetch location');
        locationButton.removeAttr('disabled').text('Send location');
    });
});