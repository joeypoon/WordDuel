const INITIAL_STATE = 'Menu';

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_ROUTE':
            return action.route;
    }
    return state;
}