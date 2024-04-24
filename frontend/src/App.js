import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lobby from './components/Lobby';
import Game from './components/Game';

function App() {
    const [lobbyId, setLobbyId] = useState(null);

    // Function to handle joining the game
    const joinGame = (id) => {
        setLobbyId(id);
    };

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Multiplayer Game Lobby</h1>
                </header>
                <Routes>
                    {/* Update from Switch to Routes and adjust Route component usage */}
                    <Route path="/" element={<Lobby onJoin={joinGame} />} exact />
                    <Route path="/game" element={lobbyId ? <Game lobbyId={lobbyId} /> : <div>Please join a game from the lobby.</div>} exact />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
