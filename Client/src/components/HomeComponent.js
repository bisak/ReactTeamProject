import React, { Component } from 'react'
import {Jumbotron, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Auth from '../Auth'
import CountTo from 'react-count-to'

class FooterComponent extends Component {
  render () {
    let loginButton
    let registerButton
    let productsButton
    if (!Auth.isUserAuthenticated()) {
      loginButton = (<p><Link className='btn btn-default' to={'/login'} role='button'>Log in &raquo;</Link></p>)
      registerButton = (<p><Link className='btn btn-default' to={'/register'} role='button'>Register &raquo;</Link></p>)
      productsButton = (<p><Link className='btn btn-default' to={'/products'} role='button'>Products &raquo;</Link></p>)
    }
    return (

      <div>
        <Jumbotron>
          <div className='container'>
            <h1>Welcome to Reactive Store.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur error placeat ipsam, enim cum dolorum ipsum laudantium id dicta doloribus veniam non sequi, recusandae minus. Aspernatur, iure! In, inventore, assumenda!</p>
            <p><Link className='btn btn-primary btn-lg' to={'/products'} role='button'>Our products.</Link></p>
          </div>
        </Jumbotron>

        <div className='container text-center'>
          <Row>
            <Col md={4} >
              <h2><CountTo to={250} speed={2000} /></h2>
              <p>Happy users</p>
              {registerButton}
            </Col>
            <Col md={4} >
              <h2><CountTo to={500} speed={2000} /></h2>
              <p>React components for sale</p>
              {productsButton}
            </Col>
            <Col md={4} >
              <h2><CountTo to={469} speed={2000} /></h2>
              <p>Purchases</p>
              {loginButton}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default FooterComponent
