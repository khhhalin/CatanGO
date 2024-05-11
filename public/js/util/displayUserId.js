function displayUserId(userId) {
    const userIdDiv = document.createElement('div');
    userIdDiv.style.position = 'absolute';
    userIdDiv.style.top = '10px';
    userIdDiv.style.right = '10px';
    userIdDiv.textContent = `Your ID: ${userId}`;
    document.body.appendChild(userIdDiv);
}

export {displayUserId};