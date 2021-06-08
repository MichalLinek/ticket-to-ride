import "./Map.css";
import Route from "../Route/Route";
import City from "../City/City";

import React from 'react';

class Map extends React.Component {
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
        </div>
      </div>
    );
  }
}

export default Map;
