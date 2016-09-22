import { AdMobInterstitial } from 'react-native-admob'

export function adMobEventListeners () {
    AdMobInterstitial.setAdUnitID('ca-app-pub-7555574328592077/8559000747');
    AdMobInterstitial.addEventListener('interstitialDidLoad',
      () => AdMobInterstitial.showAd((error) => error && console.log(error)));
}

export function requestAd () {
    AdMobInterstitial.requestAd((error) => error && console.log(error));
}