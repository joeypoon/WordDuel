import { modalTypes, actionTypes } from '../constants';

export function setRoute(route) {
    return {
        type: actionTypes.setRound,
        route
    };
}

export function setModalVisible(isVisible) {
    return {
        type: actionTypes.setModalVisible,
        isVisible
    };
}

export function setModalType(modalType) {
    return {
        type: actionTypes.setModalType,
        modalType
    }
}
