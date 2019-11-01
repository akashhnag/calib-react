import React, { Component } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import modeSwitchAction from '../../actions/modeSwitchAction';
class ModeSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'active',
            rtsp: '',
            video: ''
        }
    }

    assignProps() {
        this.props.currentMode(this.state)
    }

    buttonClick = (e) => {
        switch (e.target.value) {
            case 'image': if (this.state.image !== 'active') {
                this.setState({
                    image: 'active',
                    rtsp: '',
                    video: ''
                }, this.assignProps);
            }
                break;
            case 'rtsp': if (this.state.rtsp !== 'active') {
                this.setState({
                    image: '',
                    rtsp: 'active',
                    video: ''
                }, this.assignProps);
            }
                break;
            case 'video': if (this.state.video !== 'active') {
                this.setState({
                    image: '',
                    rtsp: '',
                    video: 'active'
                }, this.assignProps);
            }
                break;
        }

    }
    render() {
        return (
            <div>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" className={this.state.image}
                        onClick={this.buttonClick} value='image'>Image</Button>
                    <Button variant="secondary" className={this.state.rtsp}
                        onClick={this.buttonClick} value='rtsp'>RTSP</Button>
                    <Button variant="secondary" className={this.state.video}
                        onClick={this.buttonClick} value='video'>Video</Button>
                </ButtonGroup>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        currentMode: modeSwitchAction
    }, dispatch)
}

export default connect(null, matchDispatchToProps)(ModeSwitch)
//export default ModeSwitch
