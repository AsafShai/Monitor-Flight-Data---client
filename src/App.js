import React, { Component } from 'react';
import './App.css';
import TextualMonitor from './Components/TextualMonitor'
import io from 'socket.io-client'

const ENDPOINT = "http://127.0.0.1:4000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: 0,
      Altitude: null,
      HIS: null,
      ADI: null,
      isVisual: false,
      isTextual: true
    }
  }

  componentWillMount() {
    const socket = io(ENDPOINT);
    socket.on("sendingData", data => {
      this.setState({Altitude: data.altitude, HIS: data.his, ADI: data.adi})
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.setTextual}>Textual</button>
        <br/>
        <button onClick={this.setVisual}>Visual</button>
        {this.state.isTextual ? <TextualMonitor Altitude={this.state.Altitude} HIS={this.state.HIS} ADI={this.state.ADI}/> : null}
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
