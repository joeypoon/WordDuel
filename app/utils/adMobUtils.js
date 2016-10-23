import { AdMobInterstitial } from 'react-native-admob'
import { store } from '../store';
import { logEvent } from './facebookUtils';

function handleError(err) {
    logEvent('error', null, err)
}

function handleInterstitialLoad() {
    AdMobInterstitial.showAd(handleError);
}

export function adMobEventListeners() {
    AdMobInterstitial.setAdUnitID('ca-app-pub-7555574328592077/8559000747');
    // AdMobInterstitial.setTestDeviceID('EMULATOR');
    AdMobInterstitial.addEventListener('interstitialDidLoad', handleInterstitialLoad);
}

export function requestAd() {
    AdMobInterstitial.requestAd(handleError);
}