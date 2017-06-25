import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap'

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
            <NavItem>Link</NavItem>
            <NavItem>Link</NavItem>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <MenuItem>Action</MenuItem>
              <MenuItem>Another action</MenuItem>
              <MenuItem>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem>Link Right</NavItem>
            <NavItem>Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarComponent
