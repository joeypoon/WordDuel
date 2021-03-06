import constants from 'WordDuelConstants';

// constants
export const maxRounds = 7;
export const timeOut = 5000; // in milliseconds
const gridSize = 20;

// Colors
export const mainTextColor = '#2c3e50';
export const mainColor = '#16a085';
export const secondaryColor = '#e74c3c';

// Urls
// export const rootUrl = 'http://localhost:9004';
export const rootUrl = 'ws://mighty-dawn-34412.herokuapp.com:80';

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

const vowels = ['a', 'e', 'i', 'o', 'u'];

function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function getRandomLetterArray() {
    let alpha = [];
    while (alpha.length < gridSize) {
        alpha.push(getRandomLetter());
    }
    return alpha;
}

function containsVowel(letterArray) {
    for (let vowel of vowels) {
        if (letterArray.includes(vowel))
            return true;
    }
    return false;
}

export function getRandomLetterGrid() {
    let letterArray = getRandomLetterArray();

    while (!containsVowel(letterArray)) {
        letterArray = getRandomLetterArray();
    }

    const letters = letterArray.map((letter, index) => {
        return { value: letter, position: index }
    });

    let grid = [
        letters.splice(0, 5),
        letters.splice(0, 5),
        letters.splice(0, 5),
        letters.splice(0, 5)
    ]

    return grid;
}

export const modalTypes = {
    waiting: 1,
    invalidWord: 2,
    roundOver: 3,
    opponentFound: 4,
    gameOver: 5,
    submittingWord: 6,
    playerDisconnect: 7,
    battleMenu: 8,
    searching: 9,
    noConnection: 10,
    pleaseLogin: 11,
    loading: 12,
    experience: 13,
    challengeFriend: 'challengeFriend',
    waitingForChallenge: 'waitingForChallenge',
    challengeDeclined: 'challengeDeclined',
    showChallenger: 'showChallenger'
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
    clearWord: 'clearWord',
    timeout: 'timeout',
    findActiveFriends: 'findActiveFriends',
    setFriends: 'setFriends',
    challengeFriend: 'challengeFriend',
    challengeResponse: 'challengeResponse',
    logout: 'logout',

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
    matchEnd: 17,
    matchDisconnect: 'matchDisconnect',

    // game
    setRoute: 18,
    setModalVisible: 19,
    setModalType: 20,

    // challenge
    setChallenger: 'setChallenger',
    clearChallenger: 'clearChallenger'
};

// Events
export const events = constants.events;
