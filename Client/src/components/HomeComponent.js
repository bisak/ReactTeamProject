import React, { Component } from 'react'
import {Jumbotron, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Auth from '../Auth'
import CountTo from 'react-count-to'
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions'

class FooterComponent extends Component {
  constructor (props) {
    super(props)
    this.state = HomeStore.getState()
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    HomeStore.listen(this.onChange)
    HomeActions.getHomeStats()
  }

  componentWillUnmount () {
    HomeStore.unlisten(this.onChange)
  }

  onChange (state) {
    this.setState(state)
  }

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
            <p><strong>Reactive Store</strong> is a shop for quality React components. Log in or Register to buy our products.</p>
            <p><Link className='btn btn-primary btn-lg' to={'/products'} role='button'>Our products.</Link></p>
          </div>
        </Jumbotron>

        <div className='container text-center'>
          <Row >
            <Col md={4} >
              <h2><CountTo to={this.state.stats.users} speed={1234} /></h2>
              <p>Happy users</p>
              {registerButton}
            </Col>
            <Col md={4} >
              <h2><CountTo to={this.state.stats.allComponents} speed={1234} /></h2>
              <p>Components for sale</p>
              {productsButton}
            </Col>
            <Col md={4} >
              <h2><CountTo to={this.state.stats.purchases} speed={1234} /></h2>
              <p>Total purchases</p>
              {loginButton}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default FooterComponent
