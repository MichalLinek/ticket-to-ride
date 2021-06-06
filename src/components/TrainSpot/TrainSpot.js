import "./TrainSpot.css";
import React from 'react';

class TrainSpot extends React.Component {
  constructor(props) {
    super(props);

    this.cssClasses = `train ${this.props.color}`;
  }

  render() {
    return (
      <button onClick={() => this.props.claimRoute()} style={{ left: `${this.props.left}px`, top: `${this.props.top}px`, transform: `rotate(${this.props.angle}deg)` }} className={this.cssClasses}></button>
    ); 
  }
}

export default TrainSpot;
