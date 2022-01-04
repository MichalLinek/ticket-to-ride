
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
import { takeTickets } from './animations/take-tickets';
import { setTrainPieces } from './animations/set-train-pieces';
import { showCardsUsedForRoute } from './animations/show-cards-used-for-route';

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
            const cards = nextProps.animation.cards;
            takeCardAnimation(cards[0], this.props.cards[cards[0]]);
            if (cards.length == 2) {  
              takeCardAnimation(cards[1], this.props.cards[cards[1]]);
            }
            break;
          }
          case actions.TAKE_RANDOM_CARDS: {
            takeRandomCards(nextProps.animation.cards.length > 1, this.props.cards);
            break;
          }
          case actions.TAKE_TICKETS: {
            takeTickets(nextProps.animation.cards);
            break;
          }
          case actions.CLAIM_ROUTE: {
            showCardsUsedForRoute(nextProps.animation.cardsUsed);
            setTrainPieces(nextProps.animation.routeId);
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
                <div className="capitalize">{x.type == PlayerType.HUMAN ? 'human' : 'npc'}</div>
                <div className="align-left">Points: {x.points}</div>
                <div className="align-left trains-count"><div className="train-chip" style={{backgroundColor: x.color}} /> <div>x {x.trains}</div></div>
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
  if (state.reducers.players[state.reducers.activePlayerId].type == PlayerType.NPC) {
    setTimeout(() => {
      // let random = Math.floor(Math.random() * 5);
      // if (random <2) 
      //   store.dispatch(actions.takeRandomCards())
      // else {
      //   let cards = [2, 3];
      //   store.dispatch(actions.takeCard(cards));
      // }
      // if (state.reducers.tickets.length > 0) {
      //   let random = Math.floor(Math.random() * 3);
      //   let ticketIds = [random];
      //   store.dispatch(actions.takeTickets(ticketIds));
      // }
      // else {
      //   store.dispatch(actions.takeRandomCards());
      // }

      let routes = state.reducers.map.routes;
      for( let i = 0 ; i < routes.length; i++) {
        if (routes[i].occupied !== undefined) continue;
          let activePlayer = state.reducers.players[state.reducers.activePlayerId];
          let requiredCards = routes[i].trainSpots;
          let aggregatedCards = {};

          for (let k = 0; k < requiredCards.length; k++) {
            if (!aggregatedCards[requiredCards[k].color]) {
              aggregatedCards[requiredCards[k].color] = 0;
            }

            aggregatedCards[requiredCards[k].color] += 1;
          }

          for (let card of Object.keys(aggregatedCards)) {
            if (activePlayer.trainCards[card] >= aggregatedCards[card]) {
              store.dispatch(actions.claimRoute({ 
                routeId: routes[i].routeId, 
                playerId: state.reducers.activePlayerId, 
                cardsUsed: Array(aggregatedCards[card]).fill(card) 
              }));
              return;
            }
        }
      }

      store.dispatch(actions.takeRandomCards());
      
      }, 5000); 
    
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
