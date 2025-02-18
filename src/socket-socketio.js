import io from 'socket.io-client';

export default function (socketUrl, customData, path, token) {
  const options = {
    path:path,
    auth: {
      'token': token
    },
  }
  const socket = io(socketUrl, options);
  socket.on('connect', () => {
    console.log(`connect:${socket.id}`);
    socket.customData = customData;
  });

  socket.on('connect_error', (error) => {
    console.log(error);
  });

  socket.on('disconnect', (reason) => {
    console.log(reason);
  });

  return socket;
}
