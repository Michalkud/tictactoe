import React from 'react';

class Square extends React.Component {
    render() {
        console.log(this.props)
      return (
        <button className="square" onClick={this.props.onSquareClick(this.props.i)}>
          {this.props.i}
        </button>
      );
    }
  }

export default Square;