import React, { Component } from 'react';
import $ from 'jquery';
import * as d3 from 'd3';
import send from './utils';
import Dropzone from 'react-dropzone'

class ImageView extends Component {

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
        console.log('clicked');

        //getting positions
        let svg = d3.select('svg');
        let x = Math.round(event.pageX - $('svg').offset().left);
        let y = Math.round(event.pageY - $('svg').offset().top);

        console.log(x, y, svg);
        this.drawCircle(x, y, svg)

    }

    sendRequest = () => {
        console.log('sending request');
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
                <svg className='border mt-5' width='400px' height='400px' onClick={this.svgClicked} >

                </svg>
            </div>
        )
    }
}

export default ImageView
