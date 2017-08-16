import React from 'react';
import Board from './board'

class Game extends React.Component {
    render() {
        console.log(this.props);
      return (
        <div className="game">
          <div className="game-board">
            <Board board={this.props.moves[this.props.moves.length - 1]} onSquareClick={this.props.onSquareClick} />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;