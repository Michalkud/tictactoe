const initstate = {
    xIsNext: true,
    moves: [
        Array(9).fill(null)
    ]
}

const reducer = (state = initstate, action) => {
    switch(action.type) {
        case 'NEW_MOVE':
            if(state.moves[state.moves.length -1][action.payload])
                return state;
            let newMove = state.moves.slice()
            newMove[state.moves.length -1][action.payload] = state.xIsNext?'X':'O';
            return Object.assign({}, state, {moves:[...state.moves,newMove], xIsNext: !state.xIsNext})
        default:
            return state;
    }
}

export default reducer;

