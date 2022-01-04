import "./Route.css";
import React from 'react';
import TrainSpot from "../TrainSpot/TrainSpot";
import store from './../../store';
import * as actions from "./../../actions/my-action";
import {connect} from 'react-redux'
import { PlayerType } from "../../models/const/player-type";

class Route extends React.Component {
  claimRoute = () => {
    let requiredCards = this.checkRequiredCards();
    if ((this.props.players[this.props.activePlayerId].type === PlayerType.HUMAN) &&
    this.props.route.occupied === undefined && requiredCards)
     {
      store.dispatch(actions.claimRoute({
        routeId: this.props.route.routeId,
        playerId: this.props.activePlayerId,
        cardsUsed: requiredCards
      }));
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
      if (this.props.hand.trainCards[card] >= aggregatedCards[card]) {
        return Array(aggregatedCards[card]).fill(card);
      }
    }

    return null;
  }

  render() {
    return (
      <div className="route">
        { this.props.route.trainSpots.map((x, id) => {
          return <TrainSpot routeId={this.props.route.routeId} occupiedByPlayerId = {this.props.route.occupied} key={id} top={x.y} left={x.x} angle={x.angle} color={x.color} claimRoute={() => this.claimRoute()}></TrainSpot>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hand: state.reducers.players[state.reducers.activePlayerId],
    activePlayerId: state.reducers.activePlayerId,
    players: state.reducers.players
  };
};

export default connect(mapStateToProps)(Route);