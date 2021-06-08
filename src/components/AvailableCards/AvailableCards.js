import "./AvailableCards.css";
import React from 'react';
import {connect} from 'react-redux'
import store from "../../store";
import * as actions from "./../../actions/my-action";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ChooseTickets from "../ChooseTickets/ChooseTickets";
import ViewTickets from "../ViewTickets/ViewTickets";

class AvailableCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showMyTickets: false,
      selected: [false, false, false]
    }
  }
  takeCard = (id) => {
    store.dispatch(actions.takeCard(id));
  }

  takeRandomCards = () => {
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
    if (this.props.tickets.length == 0) return;
    this.setState({ showModal: true});
  };

  hide = () => {
    this.setState({ showModal: false});
  };

  showMineTickets = () => {
    this.setState({ showMyTickets: true});
  };

  hideMineTickets = () => {
    this.setState({ showMyTickets: false});
  };

  selectTicket = (id) => {
    let stateSelected = [...this.state.selected]
    stateSelected[id] = !stateSelected[id]
    this.setState({ selected: stateSelected });
  }

  render() {
    return (
      <div>
        <div>Available Cards</div>
        <div className="two-columns">
          <div className="available-cards">
            { this.props.cards.slice(0, 5).map((x, id) => {
              
              const path = `./${x}.png`;
              return <div key={id} className="available-card-row"><img onClick={() => this.takeCard(id)} className="card-image" src={path}></img></div>
            })}
          </div>
          <div className="available-cards">
            <div><img onClick={() => this.takeRandomCards()} className="card-image" src={"./card-reverse.png"}></img></div>
            <div><img onClick={() => this.show()} className="card-image" src={"./ticket.png"}></img></div>
          </div>
        </div>
        <div>
          <button onClick={() => this.showMineTickets()}>View My Tickets</button>

        </div>
        <Modal backdrop="static" show={this.state.showModal} onHide={() => this.hide()}>
          <Modal.Header>Choose at least one Ticket</Modal.Header>
          <Modal.Body>
            <ChooseTickets tickets = {this.props.tickets} selected = {this.state.selected} selectTicket = {this.selectTicket}></ChooseTickets>
          </Modal.Body>
          <Modal.Footer><button onClick={() => this.takeTickets()} disabled={this.state.selected.filter(x => x).length == 0}>Confirm</button></Modal.Footer>
        </Modal>

        <Modal show={this.state.showMyTickets} onHide={() => this.hideMineTickets()}>
          <Modal.Header>My Tickets</Modal.Header>
          <Modal.Body>
            <ViewTickets ticketHand = {this.props.ticketHand}></ViewTickets>
          </Modal.Body>
          <Modal.Footer><button onClick={() => this.hideMineTickets()}>Cancel</button></Modal.Footer>
        </Modal>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.reducers.trainDeck,
    tickets: state.reducers.tickets,
    ticketHand: state.reducers.ticketHand
  };
};
export default connect(mapStateToProps)(AvailableCards);
