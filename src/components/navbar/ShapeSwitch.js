import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import shapeSwitchAction from '../../actions/shapeSwitchAction';

class ShapeSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            line: '',
            calibration: '',
            zone: '',
            direction: '',
            rectangle: ''
        }
    }

    assignProps(shape) {
        this.props.currentShape(shape)
    }

    buttonClick = (e) => {
        console.log(e.target.value);

        switch (e.target.value) {
            case 'line': if (this.state.line === '') {
                this.setState({
                    line: 'active',
                    calibration: '',
                    zone: '',
                    direction: '',
                    rectangle: ''
                }, this.assignProps(e.target.value))
            }
            else {
                this.setState({
                    line: ''
                });
            }
                break;
            case 'calibration': if (this.state.calibration === '') {
                this.setState({
                    line: '',
                    calibration: 'active',
                    zone: '',
                    direction: '',
                    rectangle: ''
                }, this.assignProps(e.target.value))
            }
            else {
                this.setState({
                    calibration: ''
                });
            }
                break;
            case 'zone': if (this.state.zone === '') {
                this.setState({
                    line: '',
                    calibration: '',
                    zone: 'active',
                    direction: '',
                    rectangle: ''
                }, this.assignProps(e.target.value))
            }
            else {
                this.setState({
                    zone: ''
                });
            }
                break;
            case 'direction': if (this.state.direction === '') {
                this.setState({
                    line: '',
                    calibration: '',
                    zone: '',
                    direction: 'active',
                    rectangle: ''
                }, this.assignProps(e.target.value))
            }
            else {
                this.setState({
                    direction: ''
                });
            }
                break;
            case 'rectangle': if (this.state.direction === '') {
                console.log('in rectangle');

                this.setState({
                    line: '',
                    calibration: '',
                    zone: '',
                    direction: '',
                    rectangle: 'active'
                }, this.assignProps(e.target.value))
            }
            else {
                this.setState({
                    rectangle: ''
                });
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
                    <Button variant="secondary" className={this.state.rectangle}
                        onClick={this.buttonClick} value='rectangle'>Rectangle</Button>
                </ButtonGroup>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        currentShape: shapeSwitchAction
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(ShapeSwitch)
