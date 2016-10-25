import constants from 'WordDuelConstants';

// constants
export const maxRounds = 1;
export const timeOut = 5000; // in milliseconds

// Colors
export const mainTextColor = '#2c3e50';
export const mainColor = '#16a085';
export const secondaryColor = '#e74c3c';

// Urls
export const rootUrl = 'http://localhost:9004';
// export const rootUrl = 'https://mighty-dawn-34412.herokuapp.com:80';
// export const rootUrl = 'ws://mighty-dawn-34412.herokuapp.com:80';

// defaults
export const timerDefault = 12;

export function getActiveGridDefault() {
    let activeGrid = [];
    let count = 20;
    while (count > 0) {
        activeGrid.push(false);
        count--;
    }
    return activeGrid;
}

const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z',
];

const gridSize = 20;

function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export function getRandomLetterGrid() {
    let grid = [];
    while (grid.length < gridSize) {
        grid.push(getRandomLetter());
    }
    return grid;
}

export const modalTypes = {
    waiting: 1,
    invalidWord: 2,
    roundOverSolo: 3,
    roundOverDuel: 3,
    opponentFound: 4,
    gameOver: 5,
    submittingWord: 6,
    playerDisconnect: 7,
    battleMenu: 8,
    searching: 9,
    noConnection: 10,
    pleaseLogin: 11,
    loading: 12
};

// actions
export const actionTypes = {
    // player
    setPlayer: 1,
    clearPlayer: 2,
    searchOpponent: 15,
    cancelSearch: 14,
    sendReady: 13,
    submitScore: 6,

    // opponent
    setOpponent: 3,
    clearOpponent: 4,

    // match
    setMatchId: 5,
    newRound: 7,
    clearMatch: 8,
    decrementTimer: 9,
    setTimerPause: 10,
    resetActiveGrid: 11,
    updateActiveGrid: 12,
    submitWord: 16,
    endMatch: 17,

    // game
    setRoute: 18,
    setModalVisible: 19,
    setModalType: 20
};

// Events
export const events = constants.events;
