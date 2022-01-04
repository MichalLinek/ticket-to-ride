import "./Ticket.css";
import React from 'react';
import {connect} from 'react-redux'
import City from "../City/City";

class Ticket extends React.Component {
  render() {
    return (
      <div className="ticket-container"> 
        <div className="ticket">
          <div className="ti">
        <div style={{ height: "100%", backgroundImage: `url(/${this.props.map.background})` }}>
          { this.props.map.cities.map(x => {
            return [this.props.ticket.cityAId, this.props.ticket.cityBId].indexOf(x.id) > -1 && <City key={x.cityId} name={x.name} top={x.y} left={x.x}></City>
          })}
        );
      </div>
      </div>
      <div className="ticket-labels">
        <div>{ this.props.map.cities[this.props.ticket.cityAId].name} - { this.props.map.cities[this.props.ticket.cityBId].name}</div>  
        <div>Points: { this.props.ticket.points}</div>
      </div>
      </div>
    </div>
    )}
}

const mapStateToProps = state => {
  return {
    map: state.reducers.map
  };
};

export default connect(mapStateToProps)(Ticket);