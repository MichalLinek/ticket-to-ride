
import './App.css';
import Map from "./components/Map/Map";
import React from 'react';
import { CardDeck } from './models/models/card-deck';
import Dashboard from './components/Dashboard/Dashboard';
import AvailableCards from "./components/AvailableCards/AvailableCards";
import { CardEnum } from "./models/const/card-enum";
import { map } from './maps/map1';
import store from './store'
import {connect} from 'react-redux'
import * as actions from "./actions/my-action";

class App extends React.Component {
  constructor(props) {
    super(props);
    const deckCard = new CardDeck();
    const currentMap = map;
    store.dispatch(actions.shuffleCards(deckCard.shuffle(this.props.cards)));

    this.state = {
      map: currentMap
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-content">
          <div className="message-placeholder">Test</div>
          <Map map={this.state.map}></Map>
          <div className="two-column-layout">
            <div className="half-width">
              <Dashboard hand={this.props.hand}></Dashboard>
            </div>
            <div className="half-width">
              <AvailableCards></AvailableCards>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.reducers.trainDeck,
    hand: state.reducers.hand
  };
};

export default connect(mapStateToProps)(App);
