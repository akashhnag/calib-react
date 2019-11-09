import React, { Component } from 'react';
import $ from 'jquery';
import * as d3 from 'd3';

class ImageView extends Component {

    drawCircle=(x, y,svg)=> {
            let circle = svg
                .append('circle')
                //.attr('class', clss)
                .attr('cx', x)
                .attr('cy', y)
                .attr('r', 3)
                .attr('fill', 'black');
        
        
    }
  
    svgClicked=(event)=>{
        console.log('clicked');

         //getting positions
         let svg=d3.select('svg');
         let x = Math.round(event.pageX - $('svg').offset().left);
         let y = Math.round(event.pageY -$('svg').offset().top);
        
       console.log(x, y,svg);
       this.drawCircle(x,y,svg)
      
    }

  

    render() {
        return (
            <div>
                <p>This still is image view</p>
                <svg className='border' width='400px' height='400px' onClick={this.svgClicked} >
                   
                </svg>
            </div>
        )
    }
}

export default ImageView
