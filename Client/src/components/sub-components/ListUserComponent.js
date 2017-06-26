import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Row, Col, Image } from 'react-bootstrap'

class ListUserComponent extends Component {
  render () {
    return (
      <Row>
        <Col md={8} mdOffset={2} className='list-user-card'>
          <Col xs={3} sm={2} md={2}>
            <Image alt='User Avatar' src='https://avatars2.githubusercontent.com/u/11420792' responsive circle />
          </Col>
          <Col xs={6} md={6}>
            <p className='username'><Link to={'/profile/someuser'}>Username</Link></p>
            <p className='fullName'>Firstname / lastname</p>
          </Col>
          <Col xs={3} md={4}>
            {/* Buttons are rendered depending on the view the component is used in. */}
            <Button className='action-button float-right' bsStyle='success'>Make Admin</Button>
            <Button className='action-button float-right' bsStyle='danger'>Ban User</Button>
          </Col>
        </Col>

      </Row>
    )
  }
}
export default ListUserComponent
