import { modalTypes, actionTypes } from '../constants';

export function setRoute(route) {
    return {
        type: actionTypes.setRound,
        route
    };
}

export function setModalVisible(modalVisible) {
    return {
        type: actionTypes.setModalVisible,
        modalVisible
    };
}

export function setModalType(modalType) {
    return {
        type: actionTypes.setModalType,
        modalType
    }
}
