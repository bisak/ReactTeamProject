import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavDropdown, MenuItem, Nav } from 'react-bootstrap'
import ListItemLink from './sub-components/ListItemLink'

class NavbarComponent extends Component {
  render () {
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
            <ListItemLink to='/login'>Login</ListItemLink>
            <ListItemLink to='/register'>Register</ListItemLink>
            <ListItemLink to='#'>Logout</ListItemLink>

            <NavDropdown title='User Actions' id='basic-nav-dropdown'>
              <ListItemLink to='/admin/add-product'>Add Component</ListItemLink>
              <ListItemLink to='/admin/add-admin'>Add Admin</ListItemLink>
              <ListItemLink to='/profile/all-admins'>All Admins</ListItemLink>
              <ListItemLink to='/admin/ban-user'>Ban User</ListItemLink>
              <MenuItem divider />
              <ListItemLink to='/profile/someId'>Profile</ListItemLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
