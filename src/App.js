
import './App.css';
import Map from "./components/Map/Map";
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import AvailableCards from "./components/AvailableCards/AvailableCards";
import store from './store';
import * as actions from "./actions/my-action";
import {connect} from 'react-redux'
import { PlayerType } from './models/const/player-type';
import { takeCardAnimation } from "./animations/take-card";
import { takeRandomCards } from "./animations/take-random-cards";

class App extends React.Component {
  constructor(props) {
    super(props);
    store.dispatch(actions.shuffleCards());
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.id !== nextProps.id) {
      if (nextProps.animation) {
        switch (nextProps.animation.type) {
          case actions.TAKE_CARD: {
            const card1Id = nextProps.animation.card1;
            takeCardAnimation(card1Id, this.props.cards[card1Id]);
            break;
          }
          case actions.TAKE_RANDOM_CARDS: {
            takeRandomCards(nextProps.animation.cards.length > 1, this.props.cards);
            break;
          }
        }
        
      }
    }

    return true;
  }

  render() {
    return (
      <div className="app">
        <div className="app-content">
          <div className="message-placeholder"><div>{this.props.messageInfo}</div>
            <div className="player-stats-row">
            { this.props.players.map(x => {
              return <div className="player-stat" className={x.id === this.props.activePlayerId ? 'player-active': ''} style={{color: x.color}}>
                <div className="capitalize">{x.type}</div>
                <div className="align-left">Points: {x.points}</div>
                <div className="align-left">Trains Left: {x.trains}</div>
                {x.id === this.props.activePlayerId && <div>Active</div> }
              </div>
            })}
            </div>
          </div>
          <div className="three-column-layout">
            
            <div><Dashboard></Dashboard></div>
            <div><Map map={this.props.map}></Map></div>
            <div><AvailableCards></AvailableCards></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  //trigger animations base on messageinfo {playerId - 1}, {two cards}
  // if (state.reducers.animation) {
  //   switch (state.reducers.animation.type) {
  //     case actions.TAKE_CARD: {
  //       const playerId = state.reducers.animation.playerId;
  //       const card1Id = state.reducers.animation.card1;
  //       //takeCardAnimation(card1Id, this.props.cards[card1Id], playerId);
  //       break;
  //     }
  //   }
    
  // }
  if (state.reducers.players[state.reducers.activePlayerId].type == PlayerType.NPC) {
    setTimeout(() => {
      store.dispatch(actions.takeRandomCards())
    }, 3000);
  } 
  
  return {
    cards: state.reducers.trainDeck,
    messageInfo: state.reducers.messageInfo,
    map: state.reducers.map,
    players: state.reducers.players,
    activePlayerId: state.reducers.activePlayerId,
    id: state.reducers.id,
    animation: state.reducers.animation
  };
};

export default connect(mapStateToProps)(App);
