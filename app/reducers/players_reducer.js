const INITIAL_STATE = new Map([
    ['fbToken', null],
    ['playerName', 'PlayerName'],
    ['playerLevel', 1],
    ['playerImage', './puppy.png'],
    ['opponentName', 'OpponentName'],
    ['opponentLevel', 1],
    ['opponentImage', './puppy.png']
]);

export default function (state = INITIAL_STATE, action) {
    let nextState = new Map(state);
    switch (action.type) {
        case 'SET_PLAYER_NAME':
            return nextState.set('playerName', action.name);
        case 'SET_PLAYER_LEVEL':
            return nextState.set('playerLevel', action.level);
        case 'SET_OPPONENT_NAME':
            return nextState.set('opponentName', action.name);
        case 'SET_OPPONENT_LEVEL':
            return nextState.set('opponentLevel', action.level);
        case 'SET_FB_TOKEN':
            return nextState.set('fbToken', action.token);
    }
    return state;
}