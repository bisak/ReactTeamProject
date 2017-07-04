import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Row, Col, Image } from 'react-bootstrap'

class ListUserComponent extends Component {
  addAdmin () {
    this.props.onAdminAdd(this.props.user.username)
  }

  banUser () {
    this.props.onBanUser(this.props.user.username)
  }

  removeAdmin () {
    this.props.onAdminRemove(this.props.user.username)
  }

  render () {
    let addAdminBtn
    let banUserBtn
    let removeAdminBtn
    if (this.props.addAdmin) {
      addAdminBtn = (<Button onClick={this.addAdmin.bind(this)} className='action-button float-right' bsStyle='success'>Make Admin</Button>)
    }
    if (this.props.banUser) {
      banUserBtn = (<Button onClick={this.banUser.bind(this)} className='action-button float-right' bsStyle='danger'>Ban User</Button>)
    }
    if (this.props.allAdmins) {
      removeAdminBtn = (<Button onClick={this.removeAdmin.bind(this)} className='action-button float-right' bsStyle='danger'>Remove Admin</Button>)
    }
    return (
      <Row>
        <Col md={8} mdOffset={2} className='list-user-card z-depth-1'>
          <Col xs={3} sm={2} md={2}>
            <Image alt={this.props.user.username + '\'s Avatar'} src={this.props.user.profilePic} responsive circle />
          </Col>
          <Col xs={6} md={6}>
            <p className='username'><Link to={`/profile/${this.props.user.username}`}>{this.props.user.username} ({this.props.user.firstName} {this.props.user.lastName})</Link></p>
            <p className='fullName'>{this.props.user.email}</p>
          </Col>
          <Col xs={3} md={4}>
            {addAdminBtn}
            {banUserBtn}
            {removeAdminBtn}
          </Col>
        </Col>
      </Row>
    )
  }
}
export default ListUserComponent
