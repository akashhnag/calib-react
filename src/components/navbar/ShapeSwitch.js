import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
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

    buttonClick = (e) => {
        switch (e.target.value) {
            case 'line': if (this.state.line === '') {
                this.setState({
                    line: 'active',
                    calibration: '',
                    zone: '',
                    direction: ''
                })
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
                    direction: ''
                })
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
                    direction: ''
                })
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
                    direction: 'active'
                })
            }
            else {
                this.setState({
                    direction: ''
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
                </ButtonGroup>
            </div>
        )
    }
}

export default ShapeSwitch
