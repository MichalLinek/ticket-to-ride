import "./AvailableCards.css";
import React from 'react';
import {connect} from 'react-redux'
import store from "../../store";
import * as actions from "./../../actions/my-action";

class AvailableCards extends React.Component {
  takeCard = (id) => {
    store.dispatch(actions.takeCard(id));
  }

  takeRandomCards = () => {
    store.dispatch(actions.takeRandomCards());
  }

  render() {
    return (
      <div>
        <div>Available Cards</div>
        <div class="two-columns">
          <div className="available-cards">
            { this.props.cards.slice(0, 5).map((x, id) => {
              
              const path = `./${x}.png`;
              return <div key={id} className="available-card-row"><img onClick={() => this.takeCard(id)} className="card-image" src={path}></img></div>
            })}
          </div>
          <div className="available-cards">
            <div><img onClick={() => this.takeRandomCards()} className="card-image" src={"./card-reverse.png"}></img></div>
            <div><img onClick={() => this.takeTickets()} className="card-image" src={"./ticket.png"}></img></div>
          </div>
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
