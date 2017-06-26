import React, { Component } from 'react'
import { Form, FormControl, Row, FormGroup, Col, ControlLabel, Button, Glyphicon } from 'react-bootstrap'

class RegsiterComponent extends Component {
  render () {
    return (
      <div className='container'>
        <Row><h3 className='text-center'>Register</h3></Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <Form horizontal>

              <FormGroup controlId='username-input'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='user' /></Col>
                <Col sm={10}><FormControl type='text' placeholder='Username' /></Col>
              </FormGroup>

              <FormGroup controlId='first-name-input'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='sunglasses' /></Col>
                <Col sm={10}><FormControl type='text' placeholder='First Name' /></Col>
              </FormGroup>

              <FormGroup controlId='last-name-input'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='sunglasses' /></Col>
                <Col sm={10}><FormControl type='text' placeholder='Last Name' /></Col>
              </FormGroup>

              <FormGroup controlId='email-input'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='envelope' /></Col>
                <Col sm={10}><FormControl type='text' placeholder='E-mail' /></Col>
              </FormGroup>

              <FormGroup controlId='profile-pic-url-input'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='picture' /></Col>
                <Col sm={10}><FormControl type='url' placeholder='Profile Picture URL' /></Col>
              </FormGroup>

              <FormGroup controlId='password-input'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='text-color' /></Col>
                <Col sm={10}><FormControl type='password' placeholder='Password' /></Col>
              </FormGroup>

              <FormGroup controlId='confirm-password-input'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='text-background' /></Col>
                <Col sm={10}><FormControl type='password' placeholder='Confirm Password' /></Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={1} sm={10}><Button type='submit'>Sign up</Button> </Col>
              </FormGroup>

            </Form>
          </Col>
        </Row>
      </div>

    )
  }
}
export default RegsiterComponent
