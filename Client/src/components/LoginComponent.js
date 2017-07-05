import React, { Component } from 'react'
import { Form, FormControl, Row, FormGroup, Col, ControlLabel, Button, Glyphicon } from 'react-bootstrap'
import LoginActions from '../actions/LoginActions'
import LoginStore from '../stores/LoginStore'

class LoginComponent extends Component {
  constructor (props) {
    super(props)
    this.state = LoginStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    LoginStore.listen(this.onChange)
  }

  componentWillUnmount () {
    LoginStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

  handleSubmit (event) {
    event.preventDefault()
    LoginActions.loginUser(this.state.user)
  }

  render () {
    return (
      <div className='container'>
        <Row><h4 className='text-center'>Login</h4></Row>

        <Row>
          <Col xs={10} sm={10} md={6} smOffset={1} xsOffset={1} mdOffset={3}>
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>

              <FormGroup controlId='username-input'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='user' /></Col>
                <Col sm={10}>
                  <FormControl
                    value={this.state.user.username}
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={LoginActions.inputChange} /></Col>
              </FormGroup>

              <FormGroup controlId='password-input'>
                <Col componentClass={ControlLabel} sm={1}><Glyphicon glyph='text-color' /></Col>
                <Col sm={10}>
                  <FormControl
                    value={this.state.user.password}
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={LoginActions.inputChange} />
                </Col>
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
