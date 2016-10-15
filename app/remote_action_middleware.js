import { socket } from './socket';

export default store => next => action => {
    if (action.meta && action.meta.event) {
        const event = action.meta.event;
        const params = action.meta.eventParams || {};
        socket.emit(event, params);
    }
    return next(action);
}