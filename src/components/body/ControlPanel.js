import React, { Component } from 'react'
import { Badge, Accordion, Card, Button } from 'react-bootstrap';
import LineComponent from '../body/control-components/LineComponent';
import CalibComponent from '../body/control-components/CalibComponent';
import ZoneComponent from '../body/control-components/ZoneComponent';
import DirectionComponent from '../body/control-components/DirectionComponent';
import RectangleComponent from '../body/control-components/RectangleComponent';

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Badge variant='primary'>Line</Badge>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body><LineComponent></LineComponent></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Badge variant='secondary'>Calibration</Badge>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body><CalibComponent></CalibComponent></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <Badge variant='success'>Zone</Badge>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body><ZoneComponent></ZoneComponent></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                <Badge variant='warning'>Direction</Badge>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body><DirectionComponent></DirectionComponent></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                <Badge variant='danger'>Rectangle</Badge>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body><RectangleComponent></RectangleComponent></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default ControlPanel
