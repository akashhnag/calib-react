import React, { Component } from 'react'
import { connect } from 'react-redux';
class LineComponent extends Component {
    render() {
        console.log('props', this.props.lineDetails);

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
                        return (
                            <div key={ele.x}>
                                x{ind + 1}={ele.x}; y{ind + 1}={ele.y}
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
