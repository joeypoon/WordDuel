const INITIAL_STATE = new Map([
    ['route', 'Menu'],
    ['word', '']
]);

export default function reducer (state = INITIAL_STATE, action) {
    let nextState = new Map(state);
    switch (action.type) {
        case 'SET_ROUTE':
            return nextState.set('route', action.route);
        case 'ADD_LETTER':
            return nextState.set('word', nextState.get('word') + action.letter);
        case 'CLEAR_WORD':
            return nextState.set('word', '');
        case 'SUBMIT_WORD':
            // TODO submit to backend
            return state;
    }
    return state;
}