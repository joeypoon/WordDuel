import { store } from '../store';
import { modalTypes } from '../constants';
import {
    setModalType,
    setModalVisible,
    setOpponent,
    setMatchId,
    setTimerPause,
    newRound,
    setPlayer,
    setFriends,
    setChallenger,
    challengeResponse,
    clearChallenger
} from '../actionCreators';

export function onPlayerLogin(data) {
    store.dispatch(setPlayer(data));
}

export function onPlayerFound(data) {
    const opponent = data.players.find(p => {
        return p.facebookId !== store.getState().player.get('facebookId')
    });
    store.dispatch(setOpponent(opponent));
    store.dispatch(setMatchId(data.matchId));
    store.dispatch(setModalType(modalTypes.opponentFound));
}

export function onPlayerReady() {
    const playerReady = store.getState().player.get('isReady');
    if (playerReady) {
        store.dispatch(newRound());
        store.dispatch(setModalVisible(false));
        store.dispatch(setTimerPause(false));
        store.dispatch(setPlayer({ isReady: false }));
        store.dispatch(setOpponent({ isReady: false }));
    } else {
        store.dispatch(setOpponent({ isReady: true }));
    }
}

export function onPlayerExp(data) {
    const { level, requiredExp, experience } = data;
    store.dispatch(setPlayer({ level, requiredExp, experience }));
    setTimeout(() => {
        store.dispatch(setModalType(modalTypes.experience));
    }, 3000);
}

export function onActiveFriendsFound(data) {
    store.dispatch(setFriends(data.friends));
    store.dispatch(setModalType(modalTypes.challengeFriend));
    store.dispatch(setModalVisible(true));
}

export function onChallengeRequest(data) {
    const { player } = data;
    const hasChallenger = store.getState().challenge.get('name');
    if (hasChallenger) return store.dispatch(challengeResponse(null, 0, player.socket));
    const params = {
        name: player.name,
        image: player.image,
        level: player.level,
        socket: player.socket,
        shouldShow: true
    };
    store.dispatch(setChallenger(params));
}

export function onChallengeResponse(data) {
    const { response, matchId } = data;
    const storeState = store.getState();
    const facebookId = storeState.player.get('facebookId');
    const opponentSocket = storeState.challenge.get('socket');

    if (response) {
        store.dispatch(challengeResponse(facebookId, 1, opponentSocket, matchId));
        return;
    }

    if (storeState.game.get('modalVisible')) {
        store.dispatch(setModalType(modalTypes.challengeDeclined));
    } else {
        store.dispatch(clearChallenger());
    }
}