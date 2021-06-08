
import './App.css';
import Map from "./components/Map/Map";
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import AvailableCards from "./components/AvailableCards/AvailableCards";
import store from './store';
import * as actions from "./actions/my-action";
import {connect} from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    store.dispatch(actions.shuffleCards());
  }

  render() {
    return (
      <div className="app">
        <div className="app-content">
          <div className="message-placeholder">{this.props.messageInfo}</div>
          <Map map={this.props.map}></Map>
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
    hand: state.reducers.hand,
    messageInfo: state.reducers.messageInfo,
    map: state.reducers.map
  };
};

export default connect(mapStateToProps)(App);
