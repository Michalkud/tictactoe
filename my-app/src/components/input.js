import React from 'react';

class Lengthput extends React.Component {
    render() {
        console.log(this.props);
      return (
        <input className="lengthput" onChange={this.props.onInputChange} value={this.props.value} />

      );
    }
  }

export default Lengthput;