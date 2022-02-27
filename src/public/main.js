const socket = io();

socket.on('connected', () => {
  console.log('%cServidor conectado', 'background: #222; color: #bada55');
});
