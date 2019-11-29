import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteAction from '../../../actions/deleteAction';
import highlightAction from '../../../actions/highlightAction';

class LineComponent extends Component {

    delete = (e) => {
        console.log('delte', e.target.getAttribute('data-value'));
        this.props.deleteAction({
            shape: 'line',
            index: parseInt(e.target.getAttribute('data-value'))
        })
    }

    lineClicked = (e) => {
        console.log('line clicked', e.target.getAttribute('data-value'));
        this.props.highlightAction({
            shape: 'line',
            index: e.target.getAttribute('data-value')
        })
    }

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
                                <p onClick={this.lineClicked} data-value={ele.name}>{ele.name}</p>
                                {'     '}
                                <span className='glyphicon glyphicon-trash' onClick={this.delete} data-value={ind}>Del</span>
                                {ele.coods.map((ele1, ind1) => {
                                    return (
                                        <div key={ind1}>
                                            x{ind1 + 1}:{ele1.x} y{ind1 + 1}:{ele1.y}

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
        lineDetails: state.draw.lineData,
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteAction: deleteAction,
        highlightAction: highlightAction
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(LineComponent)
