export function setupGame(roomId) {
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML = `Lobby ID: ${roomId}<br/>`;

    const incrementButton = createButton('Increment');
    const decrementButton = createButton('Decrement');

    incrementButton.addEventListener('click', () => handleCountChange('increment', roomId));
    decrementButton.addEventListener('click', () => handleCountChange('decrement', roomId));

    gameDiv.appendChild(incrementButton);
    gameDiv.appendChild(decrementButton);
}


function createButton(buttonText) {
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.className = 'button';  // Ensure this class is styled correctly in CSS
    return button;
}

function handleCountChange(action, roomId) {
    console.log(action, roomId); // Log action for debugging
    // Add Socket.IO emit logic here based on the action
    socket.emit(action, roomId);
}