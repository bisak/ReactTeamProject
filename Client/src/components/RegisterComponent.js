import React, { Component } from 'react'
import { Form, FormControl, Row, FormGroup, Col, ControlLabel, Button, Glyphicon } from 'react-bootstrap'
import RegisterStore from '../stores/RegisterStore'
import RegisterActions from '../actions/RegisterActions'
import { Redirect } from 'react-router-dom'

class RegsiterComponent extends Component {
  constructor (props) {
    super(props)
    this.state = RegisterStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    RegisterStore.listen(this.onChange)
  }

  componentWillUnmount () {
    RegisterStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  handleSubmit (event) {
    event.preventDefault()
    RegisterActions.registerUser(this.state.user, this.props)
  }

  render () {
    return (
      <div className='container'>
        {this.state.redirectTo ? <Redirect to={{ pathname: this.state.redirectTo }} /> : (
          <div>
            <Row><h4 className='text-center'>Register</h4></Row>

            <Row>
              <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
                <Form horizontal onSubmit={this.handleSubmit.bind(this)}>

                  <FormGroup controlId='username-input'>
                    <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='user' /></Col>
                    <Col sm={10}>
                      <FormControl
                        required
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={RegisterActions.inputChange} />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId='first-name-input'>
                    <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='sunglasses' /></Col>
                    <Col sm={10}>
                      <FormControl
                        required
                        type='text'
                        placeholder='First Name'
                        name='firstName'
                        onChange={RegisterActions.inputChange} />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId='last-name-input'>
                    <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='sunglasses' /></Col>
                    <Col sm={10}><FormControl
                      required
                      type='text'
                      placeholder='Last Name'
                      name='lastName'
                      onChange={RegisterActions.inputChange}
                    />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId='email-input'>
                    <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='envelope' /></Col>
                    <Col sm={10}>
                      <FormControl
                        required
                        type='email'
                        placeholder='E-mail'
                        name='email'
                        onChange={RegisterActions.inputChange} />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId='profile-pic-url-input'>
                    <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='picture' /></Col>
                    <Col sm={10}>
                      <FormControl
                        required
                        type='url'
                        placeholder='Profile Picture URL'
                        name='profilePic'
                        onChange={RegisterActions.inputChange} />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId='password-input'>
                    <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='text-color' /></Col>
                    <Col sm={10}>
                      <FormControl
                        required
                        type='password'
                        placeholder='Password'
                        name='password'
                        minLength='6'
                        onChange={RegisterActions.inputChange} />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId='confirm-password-input'>
                    <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='text-background' /></Col>
                    <Col sm={10}>
                      <FormControl
                        required
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        minLength='6'
                        onChange={RegisterActions.inputChange} />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col smOffset={1} sm={10}><Button type='submit'>Sign up</Button> </Col>
                  </FormGroup>

                </Form>
              </Col>
            </Row>
          </div>)}
      </div>

    )
  }
}
export default RegsiterComponent
