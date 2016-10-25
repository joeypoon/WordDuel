import {
    actionTypes,
    timerDefault,
    activeGridDefault
} from '../constants';

const initialState = new Map([
    ['id', null],
    ['round', 1],
    ['timer', timerDefault],
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

        case actionTypes.decrementTimer:
            if (!state.get('isPaused') && state.get('timer') > 0)
                return nextState.set('timer', nextState.get('timer') - 1);
            return nextState;

        case actionTypes.setTimerPause:
            return nextState.set('isPaused', action.isPaused)

        case actionTypes.resetActiveGrid:
            nextState.set('activeGrid', activeGridDefault);
            return nextState;

        case actionTypes.updateActiveGrid:
            let grid = nextState.get('activeGrid');
            grid[action.position] = action.active;
            return nextState.set('letterGrid', grid);

        case actionTypes.resetRound:
            return nextState.set('round', 1)
                .set('timer', timerDefault)
                .set('isPaused', true)
                .set('activeGrid', activeGridDefault);

        case actionTypes.loadLetterGrid:
            return nextState.set('letterGrid', action.grid);

        case actionTypes.clearMatch:
            return initialState;
    }
    return nextState;
}