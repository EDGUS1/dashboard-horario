import express from 'express';
import { Server as WebSocketServer } from 'socket.io';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);
const io = new WebSocketServer(httpServer);

app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {
  // console.log('Nueva conexión', socket.id);
  const address = socket.handshake;
  console.log(address);
  // console.log('New connection from ' + address.address + ':' + address.port);
  socket.emit('connected');
});

httpServer.listen(process.env.PORT || 3000);
console.log('Server on port 3000');
