import {generate} from 'random-words';

function assignLobbyId() {
    return generate({ exactly: 1, length: 5 });
}

export { assignLobbyId };
