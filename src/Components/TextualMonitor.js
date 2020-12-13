import React, { Component } from 'react';

class TextualMonitor extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
            Altitude: {this.props.Altitude}
            <br/>
            HIS: {this.props.HIS}
            <br/>
            ADI: {this.props.ADI}
        </div>
    }
    
}

export default TextualMonitor;