import "./TrainSpot.css";
import React from 'react';
import { players } from "./../../setup/players";

class TrainSpot extends React.Component {
  constructor(props) {
    super(props);

    this.cssClasses = `train ${this.props.color}`;
  }

  render() {
    return (
      <button onClick={() => this.props.claimRoute()} style={{ left: `${this.props.left}px`, top: `${this.props.top}px`, transform: `rotate(${this.props.angle}deg)` }}
      className={this.cssClasses} >
         { this.props.occupiedByPlayerId >= 0 &&  <div className="occupied" style={{ backgroundColor: players[this.props.occupiedByPlayerId].color }}></div> }
      </button>
    );  
  }
}

export default TrainSpot;
