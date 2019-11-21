import React, { Component } from 'react'
import { connect } from 'react-redux';
class LineComponent extends Component {
    render() {
        console.log('props', this.props.lineDetails);
        //return (null)
        if (this.props.lineDetails.length === 0) {
            return (
                <div>
                    Nothing to display
                </div>
            )
        }
        else {
            return (
                <div>
                    {this.props.lineDetails.map((ele, ind) => {
                        console.log(ele);
                        return (
                            <div key={ele.name}>
                                {ele.name}
                                {ele.coods.map((ele1, ind1) => {
                                    return (
                                        <div key={ind1}>
                                            {ele1.x} {ele1.y}
                                        </div>
                                    )
                                })}
                            </div>
                        )


                    })}
                </div>
            )
        }


    }
}
function mapStateToProps(state) {
    return {
        lineDetails: state.draw.lineData
    }
}
export default connect(mapStateToProps)(LineComponent)
