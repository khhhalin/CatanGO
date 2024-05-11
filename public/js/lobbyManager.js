// lobbyManager.js

const lobbies = {};

export function joinLobby(socket, lobbyId) {
    if (!lobbies[lobbyId]) {
        console.log('Lobby does not exist.');
        return false;
    }

    // Add player to the lobby
    lobbies[lobbyId].players.push(socket.id);
    console.log(`Socket ${socket.id} joined lobby ${lobbyId}`);
    return true;
}

export function getLobby(lobbyId) {
    return lobbies[lobbyId] || null;
}
