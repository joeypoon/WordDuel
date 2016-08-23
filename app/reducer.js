const INITIAL_STATE = {route: 'Menu'};

function cloneState (state) {
    let nextState = {};
    for (let [key, value] in state) {
        nextState[key] = value;
    }
    return nextState;
}

export default function reducer (state = INITIAL_STATE, action) {
    let nextState = cloneState(state);
    switch (action.type) {
        case 'SET_ROUTE':
            nextState.route = action.route;
            return nextState;
    }
    return state;
}