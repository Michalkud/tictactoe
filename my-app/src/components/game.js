import React from 'react';
import Board from './board'
import Lengthput from './input';

class Game extends React.Component {
    render() {
        console.log(this.props);
        const status = this.props.xIsNext?"Next player: X":"Next player: O";
      return (
          
        <div className="game">
          <div className="game-board">
             <Lengthput onInputChange={this.props.onInputChange} value={this.props.boardSize} /> 
            <Board board={this.props.moves[this.props.moves.length - 1]} onSquareClick={this.props.onSquareClick} />
          </div>
          <div className="game-info">
          <div className="status">{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game;