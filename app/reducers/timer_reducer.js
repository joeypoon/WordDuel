const INITIAL_STATE = new Map([['time', 15], ['isPaused', true]]);

export default function (state = INITIAL_STATE, action) {
    let nextState = new Map(state);
    switch (action.type) {
        case 'DECREMENT_TIMER':
            if (!state.get('isPaused') && state.get('time') > 0)
                return nextState.set('time', nextState.get('time') - 1);
            return nextState;
        case 'RESET_TIMER':
            return INITIAL_STATE;
        case 'SET_TIMER_PAUSE':
            return nextState.set('isPaused', action.isPaused)
    }
    return state;
}