import "./Route.css";
import React from 'react';
import TrainSpot from "../TrainSpot/TrainSpot";
import store from './../../store';
import * as actions from "./../../actions/my-action";
import {connect} from 'react-redux'
import { players } from "../../setup/players";

class Route extends React.Component {
  claimRoute = () => {
    if (this.props.route.occupied === undefined && this.checkRequiredCards()) {
      console.log('Claiming Route ' + this.props.route.routeId);
      store.dispatch(actions.claimRoute({ routeId: this.props.route.routeId, playerId: players[0].id}));
    }
    else {

    }
  }

  checkRequiredCards = () => {
    let requiredCards = this.props.route.trainSpots;
    let aggregatedCards = {};
    for (let i = 0; i < requiredCards.length; i ++) {
      if (!aggregatedCards[requiredCards[i].color]) {
        aggregatedCards[requiredCards[i].color] = 0;
      }

      aggregatedCards[requiredCards[i].color] += 1;
    }

    for (let card of Object.keys(aggregatedCards)) {
      if (this.props.hand[card] < aggregatedCards[card]) {
        return false;
      }
    }

    return true;
  }

  render() {
    return (
      <div className="route">
        { this.props.route.trainSpots.map((x, id) => {
          return <TrainSpot occupiedByPlayerId = {this.props.route.occupiedByPlayerId} key={id} top={x.y} left={x.x} angle={x.angle} color={x.color} claimRoute={() => this.claimRoute()}></TrainSpot>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hand: state.reducers.hand
  };
};

export default connect(mapStateToProps)(Route);