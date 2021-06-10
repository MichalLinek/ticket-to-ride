import "./Dashboard.css";
import React from 'react';
import {connect} from 'react-redux'
import ViewTickets from "../ViewTickets/ViewTickets";
import { takeCardAnimation } from "../../animations/take-card";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showMyTickets: false
    }
  }
  
  showMineTickets = () => {
    this.setState({ showMyTickets: true});
  };

  hideMineTickets = () => {
    this.setState({ showMyTickets: false});
  };

  render() {
    return (
      <div>
        <div className="player-cards">
          { Object.keys(this.props.hand).map(x => {
            return <div key={x} className="card-row"><img className="card-image" src={`./${x}.png`}></img><div className="card-counter"> x {this.props.hand[x]}</div></div>
          })}

        <img onClick={() => this.showMineTickets()} className="card-image" src={"./ticket.png"}></img>
        <Modal show={this.state.showMyTickets} onHide={() => this.hideMineTickets()}>
          <Modal.Header>My Tickets</Modal.Header>
          <Modal.Body>
            <ViewTickets ticketHand = {this.props.trainCards}></ViewTickets>
          </Modal.Body>
          <Modal.Footer><button onClick={() => this.hideMineTickets()}>Cancel</button></Modal.Footer>
        </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hand: state.reducers.players[state.reducers.activePlayerId].trainCards,
    trainCards: state.reducers.players[state.reducers.activePlayerId].ticketCards
  };
};
export default connect(mapStateToProps)(Dashboard);
