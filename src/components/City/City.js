import "./City.css";
import React from 'react';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Lublin'
    }
  }

  render() {
    return (
      <div style={{ left: `${this.props.left}px`, top: `${this.props.top}px` }} className="city">
        <div className="city-label">{ this.props.name}</div>
        <div className="city-point">
          <div className="city-inner">
          </div>
        </div>
      </div>
    );
  }
}

export default City;
