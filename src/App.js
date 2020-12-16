import React, { Component } from 'react';
import './App.css';
import TextualMonitor from './TextualMonitor/TextualMonitor'
import io from 'socket.io-client'
import VisualMonitor from './VisualMonitor';

const ENDPOINT = "http://127.0.0.1:4000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: 0,
      Altitude: 0,
      HIS: 0,
      ADI: 0,
      isVisual: false,
      isTextual: true
    }
  }

  /**
   * connects to the server with a tcp connection,
   *  and recieves flight data from the server
   */
  componentWillMount() {
    const socket = io(ENDPOINT);
    socket.on("sendingData", flightData => {
      this.setState({Altitude: flightData.altitude, HIS: flightData.his, ADI: flightData.adi})
    })
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="button-wrapper" style={{left:"0px", width:"200px", padding:"10px"}}>
            <button onClick={this.setTextual} className="btn btn-primary">Textual</button>
            <button onClick={this.setVisual} className="btn btn-primary">Visual</button>
          </div>

          {this.state.isTextual ? <TextualMonitor Altitude={this.state.Altitude} HIS={this.state.HIS} ADI={this.state.ADI}/> : null}
          {this.state.isVisual ? <VisualMonitor Altitude={this.state.Altitude} HIS={this.state.HIS} ADI={this.state.ADI}/> : null}
        </div>
      </div>
    );
  }

  setTextual = () => {
    this.setState({isVisual: false, isTextual: true})
  }

  setVisual = () => {
    this.setState({isVisual: true, isTextual: false})
  }
}

export default App;
