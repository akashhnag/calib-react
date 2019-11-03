import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import shapeSwitchAction from '../../actions/shapeSwitchAction';

class ShapeSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            line: '',
            calibration: '',
            zone: '',
            direction: ''
        }
    }

    assignProps() {
        this.props.currentShape(this.state)
    }

    buttonClick = (e) => {
        switch (e.target.value) {
            case 'line': if (this.state.line === '') {
                this.setState({
                    line: 'active',
                    calibration: '',
                    zone: '',
                    direction: ''
                },this.assignProps)
            }
            else {
                this.setState({
                    line: ''
                },this.assignProps);
            }
                break;
            case 'calibration': if (this.state.calibration === '') {
                this.setState({
                    line: '',
                    calibration: 'active',
                    zone: '',
                    direction: ''
                },this.assignProps)
            }
            else {
                this.setState({
                    calibration: ''
                },this.assignProps);
            }
                break;
            case 'zone': if (this.state.zone === '') {
                this.setState({
                    line: '',
                    calibration: '',
                    zone: 'active',
                    direction: ''
                },this.assignProps)
            }
            else {
                this.setState({
                    zone: ''
                },this.assignProps);
            }
                break;
            case 'direction': if (this.state.direction === '') {
                this.setState({
                    line: '',
                    calibration: '',
                    zone: '',
                    direction: 'active'
                },this.assignProps)
            }
            else {
                this.setState({
                    direction: ''
                },this.assignProps);
            }
                break;
        }
    }
    render() {
        return (
            <div>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" className={this.state.line}
                        onClick={this.buttonClick} value='line'>Line</Button>
                    <Button variant="secondary" className={this.state.calibration}
                        onClick={this.buttonClick} value='calibration'>Calibration</Button>
                    <Button variant="secondary" className={this.state.zone}
                        onClick={this.buttonClick} value='zone'>Zone</Button>
                    <Button variant="secondary" className={this.state.direction}
                        onClick={this.buttonClick} value='direction'>Direction</Button>
                </ButtonGroup>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        currentShape:shapeSwitchAction
    },dispatch)
}
export default connect(null,mapDispatchToProps)(ShapeSwitch)
