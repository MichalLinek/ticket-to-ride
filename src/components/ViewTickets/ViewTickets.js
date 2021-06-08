import "./ViewTickets.css";
import React from 'react';
import Ticket from "../Ticket/Ticket";

class ViewTickets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>  
       { this.props.ticketHand.map((x, id) => {
         return <div> <Ticket ticket={x} key={id}></Ticket> </div>
       } )}
    </div>
    );
  }
}

export default ViewTickets;
