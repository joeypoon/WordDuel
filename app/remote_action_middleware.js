export default store => next => action => {
    if (action.meta && action.meta.remote) {
        const params = action.meta.remoteParams || [];
        action.meta.remote(...params);
    }
    return next(action);
}