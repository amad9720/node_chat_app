const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

var port = process.env.PORT || 3000 ; 

var app = express();
app.use(express.static(path.join(__dirname, '../public')));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New USER connected !');

    socket.on('disconnect', (socket) => {
        console.log('USER disconnected !');
    });

    socket.on('createMessage', function (Data) {
        console.log('Message Created :', JSON.stringify(Data,undefined,4));
    })

    socket.emit('newMessage', {
        from : "amly@gmail.com",
        body: "Hey nice to meat you Elen",
        createdAt: new Date().getDate()
    });
});

server.listen(port, () => {
    console.log(`App up and running on port ${port}`)
});