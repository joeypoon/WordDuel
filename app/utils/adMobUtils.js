import { AdMobInterstitial } from 'react-native-admob'
import { store } from '../store';
import {
    setModalVisible,
    searchOpponent,
    setTimerPause
} from '../action_creators';
import { logEvent } from './facebookUtils';

function route() {
    return store.getState().route;
}

function handleError(err) {
    logEvent('error', null, err)
}

function handleInterstitialLoad() {
    store.dispatch(setTimerPause(true));
    if (route() === 'Duel')
        store.dispatch(setModalVisible(false));
    setTimeout(AdMobInterstitial.showAd.bind(this, handleError), 400);

}

function handleInterstitialOpen() {
    const facebookId = store.getState().players.get('facebookId');
    store.dispatch(searchOpponent(facebookId));
}

function handleInterstitialClose() {
    if (route() === 'Duel') store.dispatch(setModalVisible(true));
    store.dispatch(setTimerPause(false));
}

export function adMobEventListeners() {
    AdMobInterstitial.setAdUnitID('ca-app-pub-7555574328592077/8559000747');
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.addEventListener('interstitialDidLoad', handleInterstitialLoad);
    AdMobInterstitial.addEventListener('interstitialDidOpen', handleInterstitialOpen);
    AdMobInterstitial.addEventListener('interstitialDidClose', handleInterstitialClose);
}

export function requestAd() {
    AdMobInterstitial.requestAd(handleError);
}