import React, { Component } from 'react';
import TextualMonitorCard from './TextMonitorCard/TextualMonitorCard.js';


class TextualMonitor extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="textual">
                <div className="container" style={{margin:"0 auto"}}>
                    <h1 className="display-5" style={{marginBottom:"2.5rem"}}>Textual Monitor</h1>
                    <div class="row" style={{margin:"0 auto" ,marginLeft: "10%"}}>
                    <TextualMonitorCard name="Altitude" value={this.props.Altitude}/>
                    <TextualMonitorCard name="HIS" value={this.props.HIS}/>
                    <TextualMonitorCard name="ADI" value={this.props.ADI}/>
                    </div>
                </div>  
            </div>
        );
    }
}


export default TextualMonitor;
