import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavDropdown, MenuItem, Nav } from 'react-bootstrap'
import ListItemLink from './sub-components/ListItemLink'
import Auth from '../Auth'

class NavbarComponent extends Component {
  render () {
    let dropdown
    let registerLink
    let loginLink
    console.log(Auth.isUserAuthenticated())
    if (Auth.isUserAuthenticated()) {
      console.log('here')
      dropdown = (
        <NavDropdown title='User Actions' id='basic-nav-dropdown'>
          <ListItemLink to='/admin/add-product'>Add Product</ListItemLink>
          <ListItemLink to='/admin/add-admin'>Add Admin</ListItemLink>
          <ListItemLink to='/admin/all-admins'>All Admins</ListItemLink>
          <ListItemLink to='/admin/ban-user'>Ban User</ListItemLink>
          <MenuItem divider />
          <ListItemLink to='/profile/someId'>Profile</ListItemLink>
          <ListItemLink to='/logout'>Logout</ListItemLink>
        </NavDropdown>)
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
