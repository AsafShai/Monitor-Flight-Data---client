import React, { Component } from 'react';

class Monitor extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
            {this.props.something}
        </div>
    }
    
}

export default Monitor;