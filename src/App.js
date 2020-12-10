import React, { Component } from 'react';
import './App.css';
import Monitor from '../src/Components/Monitor'
import io from 'socket.io-client'

const ENDPOINT = "http://127.0.0.1:4000";
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: 0,
      Altitude: null,
      HIS: null,
      ADI: null
    }
  }

  componentWillMount() {
    const socket = io(ENDPOINT);
    socket.on("sendingData", data => {
      this.setState({Altitude: data})
    })
  }
  render() {
    return (
      <div>
        <Monitor something={this.state.Altitude}/>
      </div>
    );
  }
}

export default App;
