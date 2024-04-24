import React, { useState, useEffect } from 'react';

function Game({ lobbyId }) {
    const [count, setCount] = useState(0);

    // Setup WebSocket connection
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080/game');

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setCount(data.count);
        };

        // Send a message to join the lobby
        ws.onopen = () => {
            ws.send(JSON.stringify({ action: 'join', lobbyId }));
        };

        return () => ws.close();
    }, [lobbyId]);

    const increment = () => {
        // Send increment action to the server via WebSocket
    };

    const decrement = () => {
        // Send decrement action to the server via WebSocket
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Game;
