const INITIAL_STATE = new Map([['player', 0], ['opponent', 0]]);

export default function (state = INITIAL_STATE, action) {
    let nextState = new Map(state);
    switch (action.type) {
        case 'SET_PLAYER_SCORE':
            return nextState.set('player', action.score);
        case 'SET_OPPONENT_SCORE':
            return nextState.set('opponent', action.score);
    }
    return nextState;
}