const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const {messageGen} = require('./utils/message');

const path = require('path');

var port = process.env.PORT || 3000 ; 

var app = express();
app.use(express.static(path.join(__dirname, '../public')));

var server = http.createServer(app);
var io = socketIO(server);

var date = new Date();

io.on('connection', (socket) => {
    //console.log('New USER connected !');
    socket.emit("newMessage", messageGen('Admin','You are connected'));

    socket.broadcast.emit('newMessage', messageGen('Admin','New user Joined the chat'));

    socket.on('disconnect', (socket) => {
        //console.log('USER disconnected !');
    });

    socket.on('createMessage', function (Data) {
        console.log('Message Created :', JSON.stringify(Data,undefined,4));
        
        //io.emit emit an event to every single connection
        //this will take the message emited from a single user and share it with all the users
            io.emit('newMessage', messageGen(Data.from,Data.body));

        //Now we want to emit to all users but the one who send the message... for that we will use broadcasting
        //Broadcasting is like io but it will execpt the user who is sending
            // socket.broadcast.emit('newMessage',messageGen(Data.from,Data.body));
    })

    //socket.emit emit an event to a single connection
    // socket.emit('newMessage', {
    //     from : "amly@gmail.com",
    //     body: "Hey nice to meat you Elen",
    //     createdAt: new Date().getDate()
    // });
});

server.listen(port, () => {
    console.log(`App up and running on port ${port}`)
});