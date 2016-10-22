import { AdMobInterstitial } from 'react-native-admob'
import { store } from '../store';
import {
    setModalVisible,
    searchOpponent,
    setTimerPause
} from '../action_creators';
import { logEvent } from './facebookUtils';

function handleError(err) {
    logEvent('error', null, err)
}

function handleInterstitialLoad() {
    store.dispatch(setTimerPause(true));
    AdMobInterstitial.showAd(handleError);
}

function handleInterstitialClose() {
    store.dispatch(setTimerPause(false));
}

export function adMobEventListeners() {
    AdMobInterstitial.setAdUnitID('ca-app-pub-7555574328592077/8559000747');
    AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.addEventListener('interstitialDidLoad', handleInterstitialLoad);
    AdMobInterstitial.addEventListener('interstitialDidClose', handleInterstitialClose);
}

export function requestAd() {
    AdMobInterstitial.requestAd(handleError);
}