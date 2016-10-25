import { events, actionTypes } from '../constants';

export function setPlayer(params) {
    return {
        type: actionTypes.setPlayer,
        params
    };
}

export function clearPlayer() {
    return {
        type: actionTypes.clearPlayer
    };
}

export function searchOpponent(facebookId) {
    return {
        type: actionTypes.searchOpponent,
        meta: {
            event: events.players.search,
            eventParams: {
                facebookId
            }
        }
    }
}


export function cancelSearch(facebookId) {
    return {
        type: actionTypes.cancelSearch,
        meta: {
            event: events.search.cancel,
            eventParams: {
                facebookId
            }
        }
    };
}

export function setReady(matchId) {
    return {
        type: actionTypes.setReady,
        meta: {
            event: events.players.ready,
            eventParams: {
                matchId
            }
        }
    };
}

export function transmit(socket, params) {
    return {
        type: actionTypes.transmit,
        meta: {
            event: events.players.transmit,
            eventParams: {
                socket,
                params
            }
        }
    };
}

export function submitScore(score) {
    return {
        type: actionTypes.submitScore,
        meta: {
            event: events.score.submit,
            eventParams: {
                score
            }
        }
    };
}