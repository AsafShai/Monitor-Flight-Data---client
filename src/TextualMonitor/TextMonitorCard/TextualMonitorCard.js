import React, { Component } from 'react';


class TextualMonitorCard extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div class="col-sm-4 card text-white bg-dark mb-3" style={{maxWidth: "18rem",margin:"10px",padding:"5px"}}>
            <div class="card-body">
              <h5 class="card-title card-header">{this.props.name}</h5>
              <p class="card-text">{this.props.value}</p>
            </div>
          </div>
        );
    }
}


export default TextualMonitorCard;



