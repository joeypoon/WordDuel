import {
    actionTypes,
    timerDefault,
    getRandomLetterGrid,
    getActiveGridDefault
} from '../constants';

const initialState = new Map([
    ['id', null],
    ['round', 0],
    ['timer', timerDefault],
    ['isPaused', true],
    ['letterGrid', getRandomLetterGrid()],
    ['activeGrid', getActiveGridDefault()]
]);

function deepClone(state) {
    let nextState = new Map(state);
    nextState.set('activeGrid', [...nextState.get('activeGrid')]);
    return nextState;
}

export function match(state = initialState, action) {
    let nextState = deepClone(state);

    switch (action.type) {

        case actionTypes.setMatchId:
            return nextState.set('id', action.matchId);

        case actionTypes.decrementTimer:
            if (!state.get('isPaused') && state.get('timer') > 0)
                return nextState.set('timer', nextState.get('timer') - 1);
            return nextState;

        case actionTypes.setTimerPause:
            return nextState.set('isPaused', action.isPaused)

        case actionTypes.resetActiveGrid:
            nextState.set('activeGrid', getActiveGridDefault());
            return nextState;

        case actionTypes.updateActiveGrid:
            let grid = nextState.get('activeGrid');
            grid[action.position] = action.active;
            return nextState.set('activeGrid', grid);

        case actionTypes.newRound:
            const currentRound = nextState.get('round');
            return nextState.set('round', currentRound + 1)
                .set('timer', timerDefault)
                .set('isPaused', true)
                .set('activeGrid', getActiveGridDefault())
                .set('letterGrid', getRandomLetterGrid());

        case actionTypes.clearMatch:
            return initialState;
    }
    return nextState;
}