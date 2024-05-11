// src/util/socket/createLobby.js
import { assignLobbyId } from "../assign/assignLobbyId.js";

function createLobby(socket) {
    const lobbyId = assignLobbyId();
    socket.join(lobbyId);
    socket.emit('lobbyCreated', lobbyId);
    console.log(`New lobby created: ${lobbyId}`);
    return lobbyId
}

export { createLobby };
