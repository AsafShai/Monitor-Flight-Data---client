import 'react'
import React, { Component } from 'react';
import './ADI.css'

class ADIComponent extends Component {
    constructor(props) {
        super(props);
        this.maxAdi = 100;
        this.minAdi = -100;
        this.precentage = 0;
        
    }

    /**
     * returns the precentage of blue based on the ADI props and the range of ADI
     */
    calculatePercantage() {
        var difference = this.maxAdi - this.minAdi;
        var precentage = Number((this.props.ADI * 100 / difference) + 50);
        return precentage;
    }


    render() {
        this.precentage = this.calculatePercantage();
        return <div className="adi-border" style={{background:`linear-gradient(  rgb(0,113,255)
                ${this.precentage}%, rgb(75,255,50) ${this.precentage}% )`}}>
        </div>
    }
}
export default ADIComponent;