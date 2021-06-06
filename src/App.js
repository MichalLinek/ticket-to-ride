
import './App.css';
import Map from "./components/Map/Map";
import React from 'react';
import { CardDeck } from './models/models/card-deck';
import Dashboard from './components/Dashboard/Dashboard';
import AvailableCards from "./components/AvailableCards/AvailableCards";
import { CardEnum } from "./models/const/card-enum";
import { map } from './maps/map1';

class App extends React.Component {
  constructor(props) {
    super(props);
    const deckCard = new CardDeck();
    const currentMap = map;
    deckCard.initialize();
    let hand = {}
    hand[CardEnum.LOCOMOTIVE] = 0;
    hand[CardEnum.PINK] = 0;
    hand[CardEnum.ORANGE] = 0;
    hand[CardEnum.YELLOW] = 0;
    hand[CardEnum.GREEN] = 0;
    hand[CardEnum.BLACK] = 0;
    hand[CardEnum.BLUE] = 0;
    hand[CardEnum.RED] = 0;
    hand[CardEnum.WHITE] = 0;

    this.state = {
      deckCard: deckCard,
      hand: hand,
      map: currentMap
    }
  }

  takeCard = (x) => {
    this.state.hand[x] += 1;
    let hand = {...this.state.hand};
    this.setState( { hand });
  }

  render() {
    return (
      <div className="app">
        <div className="app-content">
          <div className="message-placeholder">Test</div>
          <Map map={this.state.map}></Map>
          <div className="two-column-layout">
            <div className="half-width">
              <Dashboard hand={this.state.hand}></Dashboard>
            </div>
            <div className="half-width">
              <AvailableCards onTakeCard={(x) => this.takeCard(x)} cardDeck={this.state.deckCard}></AvailableCards>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
