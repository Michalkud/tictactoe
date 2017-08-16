const initstate = {
    xIsNext: true,
    moves: [
        Array(1).fill(null)
    ],
    boardSize: 1
}

const reducer = (state = initstate, action) => {
  
    switch(action.type) {
        case 'NEW_MOVE':
            if(state.moves[state.moves.length -1][action.payload])
                return state;
            let newMove = state.moves[state.moves.length -1].slice()
            newMove[action.payload] = state.xIsNext?'X':'O';
            return Object.assign({}, state, {moves:[...state.moves,newMove], xIsNext: !state.xIsNext});
        case 'NEW_SIZE':
            let newArr = Array(parseInt(action.payload||'1')).fill(null);
            return Object.assign({}, state, {moves:[...state.moves,newArr], boardSize: action.payload});

        default:
            return state;
    }
}

export default reducer;

