import { actionTypes } from '../constants';

const initialState = new Map([
    ['route', 'Menu'],
    ['modalVisible', false],
    ['modalType', null]
]);

export function game(state = initialState, action) {
    let nextState = new Map(state);
    switch (action.type) {
        case actionTypes.setRoute:
            return nextState.set('route', action.route);
        case actionTypes.setModalVisible:
            return nextState.set('modalVisible', action.modalVisible);
        case actionTypes.setModalType:
            return nextState.set('modalType', action.modalType);
    }
    return nextState;
}