import { displayUserId } from "./util/displayUserId.js"
import { setupGame } from "./util/setupGame.js"
import { createbutton , joinbutton, joininput } from "./elements.js";

const socket = io();


createbutton.addEventListener('click', function(){
    socket.emit('createLobby');
});

joinbutton.addEventListener('click',function()  {
    const lobbyId = joininput.value;
    socket.emit('joinLobby', lobbyId);
});

socket.on('connected', (userId) => {
    displayUserId(userId);
    console.log(`connected: ${userId}`);
});

socket.on('lobbyCreated', (roomId) => {
    setupGame(roomId);  // Set up the game UI after lobby is created
});

socket.on('lobbyJoined', (lobbyId) => {
    console.log(`Joined lobby with ID: ${lobbyId}`);
    setupGame(lobbyId);  // Set up the game UI after joining the lobby
});

socket.on('error', (message) => {
    messages.value = message;
});