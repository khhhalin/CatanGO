import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { setupSocketEvents } from './util/socket/socketManager.js';

let app = express();
let server = http.createServer(app);
let io = new Server(server);

app.use(express.static('public'));
app.get('/favicon.ico', (req, res) => res.status(204).end());

io.on('connection', (socket) => {
    setupSocketEvents(socket);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
