import React, { Component } from 'react';
import $ from 'jquery';
import * as d3 from 'd3';
import send from './utils';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import drawAction from '../../actions/drawAction';

let clicks = 0; let lineData = []
class ImageView extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
                    lineData.push({ x: x, y: y });
                    clicks++;
                    if (clicks == 2) {
                        this.props.drawAction({
                            shape: currentShape,
                            coods: lineData
                        })
                        clicks = 0;
                        //lineData = [];

                    }

                }
            }




        }

    }

    sendRequest = () => {
        send();
    }


    render() {
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
                <img src={this.props.drawDetails.imageURL}></img>
                <svg className='border mt-5' width='400px' height='400px' onClick={this.svgClicked} >

                </svg>
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
