import 'react'
import React, { Component } from 'react';
import './ADI.css'

class ADIComponent extends Component {
    constructor(props) {
        super(props);
        this.maxAdi = 100;
        this.minAdi = -100;
        this.result = 0;
        
    }

    calculatePercantage() {
        var difference = this.maxAdi - this.minAdi;
        var result = Number((this.props.ADI * 100 / difference) + 50);
        return result;
    }


    render() {
        this.result = this.calculatePercantage();
        return <div className="adi-border" style={{background:`linear-gradient(  rgb(0,113,255)
                ${this.result}%, rgb(75,255,50) ${this.result}% )`}}>
        </div>
    }
}
export default ADIComponent;