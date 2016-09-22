import {
  GraphRequest,
  GraphRequestManager,
  AppEventsLogger
} from 'react-native-fbsdk';
import { AdMobInterstitial } from 'react-native-admob'

import { store } from './store';

const requestManager = new GraphRequestManager();

function responseInfoCallback (error: ?Object, result: ?Object) {
    if (error) {
        alert('Error fetching data: ' + error.toString());
    } else {
        store.dispatch({
            type: 'SET_PLAYER_NAME',
            name: result.first_name
        });
        store.dispatch({
            type: 'SET_PLAYER_IMAGE',
            image: result.picture.data.url
        });
    }
}

export function requestData () {
    const url = '/me?fields=first_name,picture.type(normal)';
    const infoRequest = new GraphRequest(url, null, responseInfoCallback);
    requestManager.addRequest(infoRequest).start();
}

export function adMobEventListeners () {
    AdMobInterstitial.setAdUnitID('ca-app-pub-7555574328592077/8559000747');
    AdMobInterstitial.addEventListener('interstitialDidLoad',
      () => AdMobInterstitial.showAd((error) => error && console.log(error)));
}

export function requestAd () {
    AdMobInterstitial.requestAd((error) => error && console.log(error));
}

export function logEvent (event) {
    AppEventsLogger.logEvent(event);
}