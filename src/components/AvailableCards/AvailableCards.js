import "./AvailableCards.css";
import React from 'react';
import {connect} from 'react-redux'
import store from "../../store";
import * as actions from "./../../actions/my-action";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ChooseTickets from "../ChooseTickets/ChooseTickets";
import { PlayerType } from "../../models/const/player-type";
import { CardEnum } from "../../models/const/card-enum";

class AvailableCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selected: [false, false, false],
      firstCardId: null
    }
  }

  takeCard = (id) => {
    if (this.props.players[this.props.activePlayerId].type === PlayerType.HUMAN) {
      if (id === this.state.firstCardId) {
        this.setState({firstCardId: null});
        return;
      }

    
      if (this.state.firstCardId !== null && this.props.cards[id] !== CardEnum.LOCOMOTIVE) {
        let cardIds = [id, this.state.firstCardId];
        store.dispatch(actions.takeCard(cardIds));
        this.setState({firstCardId: null});
      }
      else if (this.state.firstCardId !== null && this.props.cards[id] === CardEnum.LOCOMOTIVE) {
        return;
      }
      else if (this.state.firstCardId === null && this.props.cards[id] === CardEnum.LOCOMOTIVE) {
        store.dispatch(actions.takeCard([id]));
        this.setState({firstCardId: null});
      }
      else { 
        this.setState({firstCardId: id});
      }
    }
  }

  takeRandomCards = () => {
    if (this.props.players[this.props.activePlayerId].type === PlayerType.HUMAN)
      store.dispatch(actions.takeRandomCards());
  }

  takeTickets = () => {
      store.dispatch(actions.takeTickets({
        takenTickets: this.state.selected,
        playerId: 0}));
      this.hide();
      this.setState({
        selected: [false, false, false]
      })
  }

  show = () => {
    if (this.props.players[this.props.activePlayerId].type === PlayerType.HUMAN) {
      if (this.props.tickets.length == 0) return;
      this.setState({ showModal: true});
    }
  };

  hide = () => {
    this.setState({ showModal: false});
  };

  selectTicket = (id) => {
    let stateSelected = [...this.state.selected]
    stateSelected[id] = !stateSelected[id]
    this.setState({ selected: stateSelected });
  }

  render() {
    return (
      <div>
        <div className="available-cards">
          { this.props.cards.slice(0, 5).map((x, id) => {
            return (
              <div key={id} className="available-card-row">
                <div className={this.state.firstCardId === id ? 'card-picked card-selector': 'card-selector'}></div>
                <img onClick={() => this.takeCard(id)} className='card-image' src={`./${x}.png`}></img>
              </div>);
          })}
        <div className="available-card-row">
          <div className='card-selector'></div>
          <img onClick={() => this.takeRandomCards()} className="card-image random-deck" src={"./card-reverse.png"}></img>
        </div >
          <div className="available-card-row">
            <div className='card-selector'></div>
            <img onClick={() => this.show()} className="card-image tickets-deck" src={"./ticket.png"}></img>
          </div>
        </div>
      <div>
        </div>
        <Modal backdrop="static" show={this.state.showModal} onHide={() => this.hide()}>
          <Modal.Header>Choose at least one Ticket</Modal.Header>
          <Modal.Body>
            <ChooseTickets tickets = {this.props.tickets} selected = {this.state.selected} selectTicket = {this.selectTicket}></ChooseTickets>
          </Modal.Body>
          <Modal.Footer><button onClick={() => this.takeTickets()} disabled={this.state.selected.filter(x => x).length == 0}>Confirm</button></Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.reducers.trainDeck,
    tickets: state.reducers.tickets,
    activePlayerId: state.reducers.activePlayerId,
    players: state.reducers.players
  };
};
export default connect(mapStateToProps)(AvailableCards);
