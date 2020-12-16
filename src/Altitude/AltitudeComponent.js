import React, { Component } from 'react';

class AltitudeComponent extends Component {
    constructor(props){
        super(props);
        this.ctx = this.canvas = null;
        this.width = 100
        this.height = 200
        this.thickness = 5
        this.max = 3000
    }
    componentDidUpdate(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.drawBar(this.props.altitude)
        
    }
    
    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        
        this.drawBar(parseInt(this.props.altitude));
    }

    drawBar(altitude)
    {
        this.ctx.beginPath();
        this.drawBorder()
        this.drawInside()
        this.drawNumbers()
        this.ctx.save()
        this.putBarOn(altitude)
        this.ctx.restore()
    }
    drawNumbers(){
        var num;
        this.ctx.save()
        this.ctx.fillStyle = '#333'
        this.ctx.font = this.width * 0.15 + "px arial";
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center"; 
        this.ctx.translate(this.width/2,15)
        for (num =this.max; num >=0 ; num-=1000) {
            this.ctx.fillText(num.toString(), 0, 0);
            this.ctx.translate(0, this.height/3.45);
        }
        this.ctx.restore()
    }
    putBarOn(altitude){
        this.ctx.strokeStyle = 'blue';
        this.ctx.lineWidth = 5
        let desiredAlititude = this.height - this.thickness - (this.height- this.thickness*2)*(altitude/this.max)
        this.ctx.moveTo(0,desiredAlititude)
        this.ctx.lineTo(this.width+10,desiredAlititude)
        this.ctx.stroke()
        this.ctx.restore()
    }
    drawBorder(){
        this.ctx.fillStyle = 'black';
        this.ctx.fill()
        this.ctx.fillRect(0,0,this.width,this.height)
    }
    drawInside(){
        this.ctx.fillStyle = 'white';
        this.ctx.fill()
        this.ctx.fillRect(this.thickness,this.thickness,this.width-this.thickness*2,this.height-this.thickness*2)
    }


    render() {
        return (
            <div>
                <canvas ref="canvas" id="canvas" width="275" height="275">
                </canvas>
            </div>
        );
    }
}

export default AltitudeComponent;
