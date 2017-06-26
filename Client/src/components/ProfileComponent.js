import React, { Component } from 'react'
import {Row, Col, Image} from 'react-bootstrap'

class ProfileComponent extends Component {
  render () {
    return (
      <div className='container'>
        <Row>
          <Col xs={4} xsOffset={4} md={2} mdOffset={5}>
            <Image alt='User Avatar' src='https://avatars2.githubusercontent.com/u/11420792' responsive circle />
          </Col>
        </Row>
        <Row>
          <p className='profile-username'>Username</p>
          <p className='profile-fnln'>FirstName  LastName</p>
        </Row>
        <Row className='bottom-profile-section'>
          <Col className='thin-grey-border' md={6}>
            <h4 className='text-center'>Bought Components</h4>
            <hr />
            all products that the user has bought
          </Col>

          <Col className='thin-grey-border' md={6}>
            <h4 className='text-center'>Reviews</h4>
            <hr />
            all products reviewed by the user
          </Col>
        </Row>
      </div>
    )
  }
}
export default ProfileComponent
