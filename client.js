
const socket = io();

        // connection with server
        socket.on('connect', function () {
            console.log('Connected to Server');
        });

        // message listener from server
        socket.on('newMessage',
            function (message) {
                console.log(message);
            });

        // add event listener to form
        document.getElementById('message-form')
            .addEventListener('submit',
                function (e) {
                    // prevent the form from submitting
                    e.preventDefault();

                    // emit message from user side
                    socket.emit('createMessage',
                        {
                            to: 'john@ds',
                            text: document
                                .querySelector(
                                    'input[name=message]'
                                ).value
                        });
                });

        // when disconnected from server
        socket.on('disconnect', function () {
            console.log('Disconnected from server');
        });