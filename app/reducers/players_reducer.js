const INITIAL_STATE = new Map([
    ['facebookId', null],
    ['playerName', null],
    ['playerLevel', 1],
    ['playerImage', null],
    ['opponentName', null],
    ['opponentLevel', 1],
    ['opponentImage', null],
    ['opponentWord', null],
    ['matchId', null]
]);

export default function(state = INITIAL_STATE, action) {
    let nextState = new Map(state);
    switch (action.type) {
        case 'SET_FACEBOOK_ID':
            return nextState.set('facebookId', action.id)
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
        case 'SET_OPPONENT_WORD':
            return nextState.set('opponentWord', action.word);
        case 'SET_MATCH_ID':
            return nextState.set('matchId', action.matchId);
    }
    return state;
}
