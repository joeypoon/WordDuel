const INITIAL_STATE = new Map([['isVisible', false], ['modalType', '']]);

export default function (state = INITIAL_STATE, action) {
    let nextState = new Map(state);
    switch (action.type) {
        case 'SET_MODAL_VISIBLE':
            return nextState.set('isVisible', action.isVisible);
        case 'SET_MODAL_TYPE':
            return nextState.set('modalType', action.modalType);
    }
    return state;
}