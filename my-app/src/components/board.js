import React from 'react';

import Square from './square'

class Board extends React.Component {
    renderSquare(i, onSquareClick) {
      return <Square value={i} onSquareClick={onSquareClick} />;
    }

    renderRow(values, onSquareClick) {

        let row = []
        values.map((value) => {
            row.push(this.renderSquare(value, onSquareClick));
        })

        return (
            <div className="board-row">
                {row}
            </div>);
    }


    renderBoard(board, onSquareClick){
        let squared = Math.sqrt(board.length);
        let rows = [];
        for (let i = 0; i < squared; i++) { 
            rows.push(this.renderRow(board.slice(i*squared, ((i + 1)*squared)), onSquareClick)); 
        }
        console.log(rows)
        return rows;
    }
  
    render() {
        console.log(this.props.board);
      const status = 'Next player: X';
  
      return (

     
        <div>
    
            {this.renderBoard(this.props.board, this.props.onSquareClick)}
                     
            
          <div className="status">{status}</div>
        </div>
      );
    }
  }

  export default Board;