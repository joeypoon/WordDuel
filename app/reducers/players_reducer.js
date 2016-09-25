const INITIAL_STATE = new Map([
    ['playerId', null],
    ['playerToken', null],
    ['playerName', null],
    ['playerLevel', 1],
    ['playerImage', null],
    ['opponentName', 'Joey'],
    ['opponentLevel', 1],
    ['opponentImage', null]
]);

export default function (state = INITIAL_STATE, action) {
    let nextState = new Map(state);
    switch (action.type) {
        case 'SET_PLAYER_ID':
            return nextState.set('playerId', action.id)
        case 'SET_PLAYER_TOKEN':
            return nextState.set('playerToken', action.token)
        case 'SET_PLAYER_NAME':
            return nextState.set('playerName', action.name);
        case 'SET_PLAYER_LEVEL':
            return nextState.set('playerLevel', action.level);
        case 'SET_PLAYER_IMAGE':
            return nextState.set('playerImage', action.image);
        case 'SET_OPPONENT_NAME':
            return nextState.set('opponentName', action.name);
        case 'SET_OPPONENT_LEVEL':
            return nextState.set('opponentLevel', action.level);
        case 'SET_OPPONENT_IMAGE':
            return nextState.set('opponentImage', action.image);
    }
    return state;
}