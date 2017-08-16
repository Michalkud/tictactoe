import React from 'react';

import Square from './square'

class Board extends React.Component {
    renderSquare(value, onSquareClick, i) {
      return <Square  key={i} value={value} onSquareClick={onSquareClick} i={i} />;
    }

    renderRow(values, onSquareClick, i) {

        let row = []

        values.map((value, x) => {
            row.push(this.renderSquare(value, onSquareClick, i + x));
        })

        return (
            <div key={i} className="board-row">
                {row}
            </div>);
    }


    renderBoard(board, onSquareClick){
        let squared = Math.sqrt(board.length);
        let rows = [];
        for (let i = 0; i < squared; i++) { 
            rows.push(this.renderRow(board.slice(i*squared, ((i + 1)*squared)), onSquareClick, i*squared)); 
        }
     
        return rows;
    }
  
    render() {
      
  
      return (

     
        <div>
    
            {this.renderBoard(this.props.board, this.props.onSquareClick)}
                     
            
          
        </div>
      );
    }
  }

  export default Board;