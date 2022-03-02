import express from 'express';
import { Server as WebSocketServer } from 'socket.io';
import http from 'http';
import Sockets from './socket';

const app = express();
const httpServer = http.createServer(app);
const io = new WebSocketServer(httpServer);

app.use(express.static(__dirname + '/public'));

Sockets(io);

httpServer.listen(process.env.PORT || 3000);
console.log('Server on port 3000');
