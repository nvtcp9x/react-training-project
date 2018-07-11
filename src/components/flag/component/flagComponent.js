import React from 'react';
import ReactDOM from 'react-dom';

class Flag extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.counterPlus}>PLUS</button>
        <button disabled>{this.props.flag}</button>
        <button onClick={this.props.counterMinus}>MINUS</button>
      </React.Fragment>
    )
  }
}

export default Flag;
