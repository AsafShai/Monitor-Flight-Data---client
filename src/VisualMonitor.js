import React, { Component } from "react";
import AltitudeComponent from "./Altitude/AltitudeComponent";
import HISComponent from "./HIS/HISComponent";
import ADIComponent from "./ADI/ADIComponent";

class VisualMonitor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="visual">
        <h1 class="display-5">Visual Monitor</h1>
        <div className="row">
          <div className="col">
            <AltitudeComponent altitude={this.props.Altitude} />
          </div>
          <div className="col">
            <HISComponent HIS={this.props.HIS} />
          </div>
          <div className="col">
            <ADIComponent ADI={this.props.ADI} />
          </div>
        </div>
      </div>
    );
  }
}

export default VisualMonitor;
