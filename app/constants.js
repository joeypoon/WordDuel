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
export const timerDefault = 15;

export function getActiveGridDefault() {
    let activeGrid = [];
    let count = 20;
    while (count > 0) {
        activeGrid.push(false);
        count--;
    }
    return activeGrid;
}

export function getLetterGridDefault() {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
    const letters = alpha.map((letter, index) => {
        return { value: letter, position: index }
    });

    return [
        letters.splice(0, 5),
        letters.splice(0, 5),
        letters.splice(0, 5),
        letters.splice(0, 5)
    ];
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
    searchOpponent: 21,
    cancelSearch: 22,
    setReady: 23,
    submitScore: 24,

    // opponent
    setOpponent: 3,
    clearOpponent: 4,

    // match
    setMatchId: 5,
    incrementRound: 6,
    resetRound: 7,
    clearMatch: 8,
    decrementTimer: 9,
    setTimerPause: 10,
    resetActiveGrid: 11,
    updateActiveGrid: 12,
    loadLetterGrid: 13,
    requestLetterGrid: 14,
    validateWord: 15,
    submitWord: 16,
    endMatch: 17,

    // game
    setRoute: 18,
    setModalVisible: 19,
    setModalType: 20
};

// Events
export const events = constants.events;
