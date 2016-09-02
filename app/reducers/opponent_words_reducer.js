const INITIAL_STATE = ['These', 'are', 'the', 'opponent\'s', 'words'];

export default function (state = INITIAL_STATE, action) {
    let nextState = new Array(...state);
    switch (action.type) {
        case 'GET_OPPONENT_WORDS':
            // TODO get from backend
            return nextState;
    }
    return state;
}