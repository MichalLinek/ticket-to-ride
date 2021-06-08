import "./Dashboard.css";
import React from 'react';
import {connect} from 'react-redux'
import Ticket from "../Ticket/Ticket";
import { tickets } from "./../../setup/map1";

class Dashboard extends React.Component {
  
  render() {
    return (
      <div>
        <div>Dashboard</div>
        <div className="player-cards">
          { Object.keys(this.props.hand).map(x => {
            
            const path = "./" + x + ".png";
            return <div key={x} className="card-row"><img className="card-image" src={path}></img><div className="card-counter"> x {this.props.hand[x]}</div></div>
          })}
          <Ticket ticket={tickets[0]}></Ticket>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hand: state.reducers.hand
  };
};
export default connect(mapStateToProps)(Dashboard);
