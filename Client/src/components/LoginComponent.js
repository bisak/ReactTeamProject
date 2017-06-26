import React, { Component } from 'react'
import { Form, FormControl, Row, FormGroup, Col, ControlLabel, Button, Glyphicon } from 'react-bootstrap'

class LoginComponent extends Component {
  render () {
    return (
      <div className='container'>
        <Row><h3 className='text-center'>Register.</h3></Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <Form horizontal>

              <FormGroup controlId='formHorizontalEmail'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='user' /></Col>
                <Col sm={10}><FormControl type='text' placeholder='Username' /></Col>
              </FormGroup>

              <FormGroup controlId='formHorizontalPassword'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='text-color' /></Col>
                <Col sm={10}><FormControl type='password' placeholder='Password' /></Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={1} sm={10}><Button type='submit'>Sign in</Button> </Col>
              </FormGroup>

            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
export default LoginComponent
