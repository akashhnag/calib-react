import React, { Component } from 'react';
import $ from 'jquery';
import * as d3 from 'd3';
import send from './utils';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import drawAction from '../../actions/drawAction';
import plotted from '../../plotted.jpg';
import '../../css/style.css';

let clicks = 0; let lineData = []; let num = 0; let result = { name: '', coods: [], type: '' };
class ImageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineData: []
        }
    }

    drawCircle = (x, y, svg) => {
        let circle = svg
            .append('circle')
            //.attr('class', clss)
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 3)
            .attr('fill', 'black');
    }

    drawLine = (x1, y1, x2, y2, svg) => {
        let line = svg
            .append('line')
            //.attr('class', 'highlight')
            .attr('x1', x1)
            .attr('y1', y1)
            .attr('x2', x2)
            .attr('y2', y2)
            .attr('stroke-width', 1)
            .attr('stroke', 'blue');
    }


    svgClicked = (event) => {
        let currentShape = this.props.shapeDetails.shape;
        if (currentShape != '') {
            //getting positions
            let svg = d3.select('svg');
            let x = Math.round(event.pageX - $('svg').offset().left);
            let y = Math.round(event.pageY - $('svg').offset().top);

            switch (currentShape) {
                case 'line': if (clicks < 2) {
                    this.drawCircle(x, y, svg);
                    result.coods.push({ x: x, y: y });
                    clicks++;
                    if (clicks == 2) {
                        console.log('result', result.coods);
                        this.drawLine(result.coods[0].x, result.coods[0].y, result.coods[1].x, result.coods[1].y, svg)
                        result.name = 'Line' + ++num;
                        result.shape = currentShape;
                        this.props.drawAction(result)
                        clicks = 0;
                        result.coods = [];
                    }
                }
            }
        }
    }

    sendRequest = () => {
        send();
    }


    render() {
        console.log('props in image view', this.props);
        if (this.props.drawDetails.hasOwnProperty('highlightLine')) {
            let x1 = this.props.drawDetails.highlightLine[0].x;
            let y1 = this.props.drawDetails.highlightLine[0].y;
            let x2 = this.props.drawDetails.highlightLine[1].x;
            let y2 = this.props.drawDetails.highlightLine[1].y;
            $('.highlight').remove();
            let svg = d3.select('svg');
            let line = svg
                .append('line')
                .attr('class', 'highlight')
                .attr('x1', x1)
                .attr('y1', y1)
                .attr('x2', x2)
                .attr('y2', y2)
                .attr('stroke-width', 4)
                .attr('stroke', 'blue');
        }

        return (
            <div>
                <p><button onClick={this.sendRequest}>send</button></p>
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div className='border' {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                <div className='wrapper mt-5'>
                    <img className='imageCarrier' src={plotted} width='800px' height='400px'></img>
                    <svg className='svgCarrier border' width='800px' height='400px' onClick={this.svgClicked} ></svg>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        drawDetails: state.draw,
        shapeDetails: state.shapeSwitch
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        drawAction: drawAction
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ImageView)
