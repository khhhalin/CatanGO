import React, { useState, useEffect } from 'react';

function Lobby({ onJoin }) {
    const [lobbies, setLobbies] = useState([]);

    useEffect(() => {
        // Fetch list of lobbies from the server or listen for updates
        // This part of the code would typically fetch existing lobbies from your backend
    }, []);

    const handleCreateLobby = () => {
        console.log("Creating a new lobby...");

        // Placeholder for actual creation logic
        // You might send a POST request to your server to create a new lobby
        // For example:
        // fetch('http://localhost:8080/create_lobby', { method: 'POST' })
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log('Lobby created:', data);
        //     setLobbies([...lobbies, data]); // Assuming 'data' is the new lobby object
        //   })
        //   .catch(error => console.error('Error creating lobby:', error));
    };

    return (
        <div>
            <h1>Available Lobbies</h1>
            {lobbies.map(lobby => (
                <button key={lobby.id} onClick={() => onJoin(lobby.id)}>
                    Join {lobby.name}
                </button>
            ))}
            <button onClick={handleCreateLobby}>Create New Lobby</button>
        </div>
    );
}

export default Lobby;
