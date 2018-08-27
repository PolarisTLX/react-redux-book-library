import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }
  // writting a custom function with and => arrow function means no need to do the "bind(this)" step.
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" primary="true" expand="sm" className="mb-5">
          <Container>
            <Link className="navbar-brand" to="/">Book Store</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/register">Sign Up</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/login">Log In</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}


export default AppNavbar;
