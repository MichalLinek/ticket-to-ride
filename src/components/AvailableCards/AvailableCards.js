import "./AvailableCards.css";
import React from 'react';
import {connect} from 'react-redux'
import store from "../../store";
import * as actions from "./../../actions/my-action";

class AvailableCards extends React.Component {
  takeCard = (id) => {
    store.dispatch(actions.takeCard(id));
  }

  render() {
    return (
      <div>
        <div>Available Cards</div>
        <div><button>Tu będzie rewers karty (2 z wierzchu)</button></div>
        <div className="available-cards">
          { this.props.cards.slice(0, 5).map((x, id) => {
            
            const path = `./${x}.png`;
            return <div key={id} className="available-card-row"><img onClick={() => this.takeCard(id)} className="card-image" src={path}></img></div>
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.reducers.trainDeck
  };
};
export default connect(mapStateToProps)(AvailableCards);
