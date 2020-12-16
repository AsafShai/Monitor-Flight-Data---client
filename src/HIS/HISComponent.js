import React, { Component } from 'react';
import imgSrc from './arrowUp.png'

class HISComponent extends Component {
    constructor(props){
        super(props);
        this.ctx = this.canvas = this.arrowImage = this.radius = null;
    }
    
    /**
     * updates the HIS monitor with new props
     */
    componentDidUpdate(){
        this.drawHISMonitor(-this.props.HIS)
    }
    
    /**
     * initializes a canvas and draw the HIS monitor on it
     */
    componentDidMount() {
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.arrowImage = this.refs.image;

        this.radius = this.canvas.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;

        this.drawHISMonitor(-this.props.HIS);

    }

    /**
     * draw the monitor
     * @param {*} his the HIS angle value
     */
     drawHISMonitor(his) {
        this.ctx.save()
        this.rotateHISMonitor(this.ctx, this.radius, his);
        this.drawAngles(this.ctx, this.radius);
        this.ctx.restore()
        this.drawArrowImage(this.ctx,this.arrowImage)
    }

    /**
     * rotates the monitor by the calculated his value
     * @param {*} ctx the canvas we draw on
     * @param {*} radius the radius of the monitor 
     * @param {*} his the his value
     */
     rotateHISMonitor(ctx, radius, his) {
        ctx.beginPath();
        this.drawHISBorder(ctx, radius)
        ctx.rotate(his * Math.PI / 180)
    }
    
    /**
     * draw the angles on the monitor
     * @param {*} ctx the canvas we draw on
     * @param {*} radius 
     */
     drawAngles(ctx, radius) {
        var calculatedAngle;
        var angle;
        ctx.fillStyle = '#333'
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (angle = 0; angle < 360; angle += 90) {
            calculatedAngle = angle * Math.PI / (-12);
            ctx.rotate(calculatedAngle);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-calculatedAngle);
            ctx.fillText(angle.toString(), 0, 0);
            ctx.rotate(calculatedAngle);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-calculatedAngle);
        }
    }

    /**
     * draws the border of the monitor
     * @param {*} ctx the canvas we draw on
     * @param {*} radius the radius of the canvas
     */
     drawHISBorder(ctx, radius) {
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

    /**
     * draws the arrow image on the canvas
     * @param {*} ctx the canvas we draw on
     * @param {*} arrowImage the image of the arrow
     */
     drawArrowImage(ctx,arrowImage) {
        ctx.drawImage(arrowImage, -arrowImage.width / 2, -arrowImage.height / 2, 50, 50);
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
