import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import Game from './components/game.js';
import reducer from './reducers/main.reducer.js';
  


let store = createStore(reducer);

const mapStateToProps = state => {
    return {moves: state.moves, xIsNext: state.xIsNext, boardSize: state.boardSize}
};

const mapDispatchToProps = dispatch => {
    return {
        onSquareClick: id => {
            dispatch({type: "NEW_MOVE", payload: id})
        },
        onInputChange: event => {
            dispatch({type: "NEW_SIZE", payload: event.target.value})
        }
    }
};

const GameWithState = connect(
    mapStateToProps,
    mapDispatchToProps
) (Game);

ReactDOM.render(
    <Provider store={store} >
    <GameWithState />
    </Provider>,
    document.getElementById('root')
);
  