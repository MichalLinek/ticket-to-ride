import "./Route.css";
import React from 'react';
import TrainSpot from "../TrainSpot/TrainSpot";

class Route extends React.Component {
  constructor(props) {
    super(props);
  }
  claimRoute = () => {
    console.log('Claiming Route ' + this.props.route.routeId);
  }

  render() {
    return (
      <div className="route">
        { this.props.route.trainSpots.map((x, id) => {
          return <TrainSpot key={id} top={x.y} left={x.x} angle={x.angle} color={x.color} claimRoute={this.claimRoute}></TrainSpot>
        })}
      </div>
    );
  }
}

export default Route;
