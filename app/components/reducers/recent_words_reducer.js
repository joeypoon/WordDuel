const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    let nextState = new Array(...state);
    switch (action.type) {
        case 'ADD_TO_RECENT_WORDS':
            nextState.push(action.word);
            while (nextState.length > 5) {
                nextState.shift();
            }
            return nextState;
    }
    return state;
}