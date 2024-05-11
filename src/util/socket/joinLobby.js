// src/util/socket/joinLobby.js
function joinLobby(socket, lobbyId) {
    const rooms = Array.from(socket.adapter.rooms.keys());
    if (rooms.includes(lobbyId)) {
        socket.join(lobbyId);
        socket.emit('lobbyJoined', lobbyId);
        console.log(`Socket ${socket.id} joined lobby: ${lobbyId}`);
        return true
    } else {
        socket.emit('error', 'Lobby does not exist' );
        return false
    }
}

export { joinLobby };
