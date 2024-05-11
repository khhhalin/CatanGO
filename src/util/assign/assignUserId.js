import {generate} from 'random-words';

function assignUserId() {
    return generate({ exactly: 1, length: 5 });
}

export { assignUserId };