// src/socketManager.js
import { createLobby } from "./createLobby.js";
import { joinLobby } from "./joinLobby.js";
import { assignUserId } from '../assign/assignUserId.js'

function setupSocketEvents(socket) {
    //to leci na connectie od razu
    var userId = assignUserId();
    console.log(`A user connected: ${userId}`);
    socket.emit('connected', userId);

    //to leci na sygnaly na socketcie
    socket.on('disconnect', () => {
        console.log(`A user disconnected: ${userId}`);
    });

    socket.on('createLobby', () => {
        var lobbyId = createLobby(socket)
        socket.emit('lobbyCreated', lobbyId);
    });
    socket.on('joinLobby', (lobbyId)=>{
        if (joinLobby(socket, lobbyId)){
            socket.emit('lobbyJoined', lobbyId);
        }
    });
}

export { setupSocketEvents };
