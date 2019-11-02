import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import ModeSwitch from './ModeSwitch';
import ShapeSwitch from './ShapeSwitch';

class NavbarComponent extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    {/* //<Navbar.Brand href="#home"> */}
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <div>React Bootstrap</div>

                    {/* </Navbar.Brand> */}
                    <div>
                        <ModeSwitch></ModeSwitch>
                    </div>

                    <div>
                        <ShapeSwitch></ShapeSwitch>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComponent
