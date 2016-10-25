import constants from 'WordDuelConstants';

// Colors
export const mainTextColor = '#2c3e50';
export const mainColor = '#16a085';
export const secondaryColor = '#e74c3c';

// Urls
export const rootUrl = 'ws://mighty-dawn-34412.herokuapp.com:80';

export const maxRounds = 7;
export const timeOut = 5000; // in milliseconds
export const timerDefault = 15;

export const modalTypes = {
    waiting: 'waiting',
    invalidWord: 'invalidWord',
    roundOverSolo: 'roundOverSolo',
    roundOverDuel: 'roundOverDuel',
    opponentFound: 'opponentFound',
    gameOver: 'gameOver',
    submittingWord: 'submittingWord',
    playerDisconnect: 'playerDisconnect',
    battleMenu: 'battleMenu',
    searching: 'searching',
    noConnection: 'noConnection',
    pleaseLogin: 'pleaseLogin',
    loading: 'loading'
};

// actions
export const actionTypes = {
    setPlayer: 1,
    clearPlayer: 2,
    setOpponent: 3,
    clearOpponent: 4,
    setMatchId: 5,
    incrementRound: 6,
    resetRound: 7,
    clearMatch: 8,
    decrementTimer: 9,
    setTimerPause: 10
};

// Events
export const events = constants.events;
