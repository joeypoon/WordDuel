import { actionTypes, timer } from '../constants';

const initialState = new Map([
    ['id', null],
    ['round', 1],
    ['timer', timer],
    ['isPaused', true],
    ['letterGrid', []],
    ['activeGrid', []]
]);

export function match(state = initialState, action) {
    let nextState = new Map(state);
    switch (action.type) {
        case actionTypes.setMatchId:
            return nextState.set('id', action.matchId);
        case actionTypes.incrementRound:
            const currentRound = nextState.get('round');
            return nextState.set('round', currentRound + 1);
        case actionTypes.resetRound:
            return nextState.set('round', 1)
                .set('timer', timer)
                .set('isPaused', true);
        case actionTypes.clearMatch:
            return initialState;
    }
    return nextState;
}