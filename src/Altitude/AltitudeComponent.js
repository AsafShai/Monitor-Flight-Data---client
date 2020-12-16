import React, { Component } from "react";

class AltitudeComponent extends Component {
    constructor(props) {
        super(props);
        this.ctx = this.canvas = null;
        this.canvasWidth = 100;
        this.canvasHeight = 200;
        this.thickness = 5;
        this.meterHeight = this.canvasHeight - this.thickness * 2;
        this.meterWidth = this.canvasWidth - this.thickness * 2;
        this.maxAltitude = 3000;
    }

    /**
     * clears the canvas and draws the updated altitude
     */
    componentDidUpdate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawAltitudeMeter(this.props.altitude);
    }
    
    /**
     * initiazes the canvas and draws the altitude
     */
    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        
        this.drawAltitudeMeter(parseInt(this.props.altitude));
    }
    
    /**
     * draws the altitude meter and the current altitude
     * @param {*} altitude the place of the bar on the meter
     */
    drawAltitudeMeter(altitude) {
        this.ctx.beginPath();
        this.drawMeterBorder();
        this.drawMeter();
        this.drawNumbers();
        this.ctx.save();
        this.drawAltitudeBar(altitude);
        this.ctx.restore();
    }

    /**
     * draws the numbers of the meter
     */
    drawNumbers() {
        var num;
        this.ctx.save();
        this.ctx.fillStyle = "#333";
        this.ctx.font = this.canvasWidth * 0.15 + "px arial";
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
        this.ctx.translate(this.canvasWidth / 2, 15);
        for (num = this.maxAltitude; num >= 0; num -= 1000) {
            this.ctx.fillText(num.toString(), 0, 0);
            this.ctx.translate(0, this.canvasHeight / 3.45);
        }
        this.ctx.restore();
    }

    /**
     * draws the bar on the correct @altitude height
     * @param {*} altitude the place of the bar on the meter
     */
    drawAltitudeBar(altitude) {
        this.ctx.strokeStyle = "blue";
        this.ctx.lineWidth = 5;
        let desiredAlititude = this.canvasHeight - this.thickness -
            this.meterHeight * (altitude / this.maxAltitude);
        this.ctx.moveTo(0, desiredAlititude);
        this.ctx.lineTo(this.canvasWidth + 10, desiredAlititude);
        this.ctx.stroke();
        this.ctx.restore();
    }

    /**
     * draws the border of the meter
     */
    drawMeterBorder() {
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    /**
     * draws the meter background
     */
    drawMeter() {
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.fillRect(this.thickness, this.thickness, this.meterWidth,
             this.meterHeight);
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" id="canvas" width="275" height="275"></canvas>
            </div>
        );
    }
}

export default AltitudeComponent;
