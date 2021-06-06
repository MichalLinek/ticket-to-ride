import "./Dashboard.css";
import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   hand: hand
    // }
  }

  render() {
    return (
      <div>
        <div>Dashboard</div>
        <div className="player-cards">
          { Object.keys(this.props.hand).map(x => {
            
            const path = "./" + x + ".png";
            return <div key={x} className="card-row"><img className="card-image" src={path}></img><div className="card-counter"> x {this.props.hand[x]}</div></div>
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
