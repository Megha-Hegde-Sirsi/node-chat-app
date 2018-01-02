var socket = io();
//method available to us because of above library
//making request from client to server to open up web socket and keep that open

socket.on('connect', function () {
    console.log('connected to server');


}); //socket.on listens to the events

socket.on('disconnect', function () {
    console.log('disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});