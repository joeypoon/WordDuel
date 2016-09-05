const INITIAL_STATE = false;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_MODAL_VISIBLE':
            return action.isVisible;
    }
    return state;
}