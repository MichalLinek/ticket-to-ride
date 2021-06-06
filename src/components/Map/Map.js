import "./Map.css";
import Route from "../Route/Route";
import City from "../City/City";

import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  placeTrains = () => {
    console.log('can place trains');
  }

  render() {
    return (
      <div className="map-area-size" style={{ backgroundImage: `url(/${this.props.map.background})` }}>
        <div className="play-area">
          { this.props.map.cities.map(x => {
            return <City key={x.cityId} name={x.name} top={x.y} left={x.x}></City>
          })}

          { this.props.map.routes.map(x => {
            return <Route key={x.routeId} route={x}></Route>
          })}
        {/* <TrainSpot top={114} left={120} angle={0}></TrainSpot>
          <TrainSpot top={105} left={68} angle={20}></TrainSpot>
          <TrainSpot top={74} left={23} angle={50}></TrainSpot>
          <TrainSpot top={25} left={0} angle={80}></TrainSpot>
          <City name="Lublin" top={122} left={173}></City>
          <City name="Zamość" top={0} left={13}></City> */}
        </div>
      </div>
    );
  }
}

export default Map;
