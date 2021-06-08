import "./ChooseTickets.css";
import React from 'react';
import Ticket from "../Ticket/Ticket";

class ChooseTickets extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>  
       { this.props.tickets.slice(0, 3).map((x, id) => {
         return <div  onClick={() => this.props.selectTicket(id)} className={this.props.selected[id] ? 'selected': ''}> 
          <Ticket ticket={x}  key={id} ></Ticket>
         </div>
       } )}
    </div>
    );
  }
}

export default ChooseTickets;
