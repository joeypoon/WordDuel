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

export function sendReady(socket) {
    return {
        type: actionTypes.sendReady,
        meta: {
            event: events.players.ready,
            eventParams: {
                socket
            }
        }
    };
}

export function submitWord(socket, word) {
    return {
        type: actionTypes.submitWord,
        meta: {
            event: events.words.submit,
            eventParams: {
                socket,
                word
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