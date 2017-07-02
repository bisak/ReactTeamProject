import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import ListItemLink from './sub-components/ListItemLink'
import Auth from '../Auth'

class NavbarComponent extends Component {
  render () {
    let dropdown
    let registerLink
    let loginLink
    let userProfileLink
    let logoutLink
    if (Auth.isUserAdmin()) {
      dropdown = (
        <NavDropdown title='Admin Actions' id='basic-nav-dropdown'>
          <ListItemLink to='/admin/add-product'>Add Product</ListItemLink>
          <ListItemLink to='/admin/add-admin'>Add Admin</ListItemLink>
          <ListItemLink to='/admin/all-admins'>All Admins</ListItemLink>
          <ListItemLink to='/admin/ban-user'>Ban User</ListItemLink>
        </NavDropdown>)
    }
    if (Auth.isUserAuthenticated()) {
      userProfileLink = (<ListItemLink to={`/profile/${Auth.getUser().username}`}>Profile</ListItemLink>)
      logoutLink = (<ListItemLink to='/logout'>Logout</ListItemLink>)
    } else {
      loginLink = (<ListItemLink to='/login'>Login</ListItemLink>)
      registerLink = (<ListItemLink to='/register'>Register</ListItemLink>)
    }
    return (
      <Navbar inverse collapseOnSelect staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Reactive Store</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <ListItemLink to='/'>Home</ListItemLink>
            <ListItemLink to='/products'>Components</ListItemLink>
          </Nav>
          <Nav pullRight>
            {loginLink}
            {registerLink}
            {dropdown}
            {userProfileLink}
            {logoutLink}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
