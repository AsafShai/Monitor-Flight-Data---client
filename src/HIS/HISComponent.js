import React, { Component } from 'react';
import imgSrc from './arrowUp.png'

class HISComponent extends Component {
    constructor(props){
        super(props);
        this.ctx = this.canvas = this.img = this.radius = null;
    }
    
    componentDidUpdate(){
        this.drawClock(-this.props.HIS)
    }
    
    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.img = this.refs.image;

        this.radius = this.canvas.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;

        this.drawClock(-this.props.HIS);
    

    }
     drawClock(his) {
        this.ctx.save()
        this.drawFace(this.ctx, this.radius, his);
        this.drawNumbers(this.ctx, this.radius);
        this.ctx.restore()
        this.drawCenterImage(this.ctx,this.img)
    }

     drawFace(ctx, radius, his) {
        ctx.beginPath();
        this.drawBorder(ctx, radius)
        ctx.rotate(his * Math.PI / 180)
    }

     drawNumbers(ctx, radius) {
        var ang;
        var num;
        ctx.fillStyle = '#333'
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (num = 0; num < 360; num += 90) {
            ang = num * Math.PI / (-12);
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    }

     drawBorder(ctx, radius) {
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        let grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();
        ctx.beginPath();
    }

     drawCenterImage(ctx,img) {
        ctx.drawImage(img, -img.width / 2, -img.height / 2, 50, 50);
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" id="canvas" width="275" height="275">
                </canvas>
                <div style={{ display: "none" }}>
                    <img ref="image" id="arrow" width="50" height="50" src = {imgSrc} style={{ position: "static" }} alt="Arrow" className="hidden"/>
                </div>
            </div>
        );
    }
}

export default HISComponent;
