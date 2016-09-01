const INITIAL_STATE = ['this', 'is', 'a', 'test'];

export default function (state = INITIAL_STATE, action) {
    let nextState = new Array(...state);
    switch (action.type) {
        case 'ADD_TO_RECENT_WORDS':
            nextState.push(action.word);
            while (nextState.length > 5) {
                nextState.shift();
            }
            return nextState;
        case 'RECENT_USER_WORDS':
            return nextState;
    }
    return state;
}