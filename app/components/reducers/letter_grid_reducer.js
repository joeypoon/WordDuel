const alpha = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'];
const letters = alpha.map((letter, index) => {
    return {value: letter, position: index}
});

const INITIAL_STATE = [
    letters.splice(0, 5),
    letters.splice(0, 5),
    letters.splice(0, 5),
    letters.splice(0, 5)
];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_LETTER_GRID':
            // TODO get from backend
            return state;
    }
    return state;
}