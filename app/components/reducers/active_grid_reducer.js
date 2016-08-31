const alpha = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'];
let INITIAL_STATE = [];
alpha.forEach((letter) => {
    INITIAL_STATE.push(false);
});

export default function(state = INITIAL_STATE, action) {
    let nextState = new Array(...state);
    switch (action.type) {
        case 'RESET_ACTIVE_GRID':
            return new Array(...INITIAL_STATE);
        case 'UPDATE_ACTIVE_GRID':
            nextState[action.position] = action.active;
            return nextState;
    }
    return state;
}