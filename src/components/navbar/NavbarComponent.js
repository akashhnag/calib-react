import React, { Component } from 'react'
import { Navbar,Container,Row,Col } from 'react-bootstrap';
import ModeSwitch from './ModeSwitch';
import ShapeSwitch from './ShapeSwitch';

class NavbarComponent extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                    <div>
                    {/* <Container fluid={true}>
                        <Row className='show-grid'>
                            <Col>
                            
                            </Col>
                            <Col>
                            <div> </div>
                            </Col>
                            <Col>
                            <div></div>
                            </Col>
                        </Row>
                    </Container> */}
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col'>
                            <div>React Bootstrap</div>
                            </div>
                            <div className='col'>
                            <ModeSwitch></ModeSwitch>
                            </div>
                            <div className='col'>
                            <ShapeSwitch></ShapeSwitch>
                            </div>
                        </div>

                    </div>
                    </div>
                    
                          
                </Navbar>
            </div>
        )
    }
}

export default NavbarComponent
