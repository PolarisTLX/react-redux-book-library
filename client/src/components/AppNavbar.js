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

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

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

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {

    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <p className="nav-link">
            <img src='./user-avatar.png' height='30' style={{display: "inline; marginRight: 10px"}} alt="avatar"/>
            Hi {user.name}!</p>
        </NavItem>
        <NavItem>
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)} className="nav-link"
          >
            Log Out
          </a>
        </NavItem>
      </Nav>
    );

    const guestLinks =(
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link className="nav-link" to="/register">Sign Up</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/login">Sign In</Link>
        </NavItem>
      </Nav>
    );

    return (
      <div>
        <Navbar color="white" primary="true" expand="sm" className="mb-5">
          <Container>
            <Link className="navbar-brand" to="/">Book Library CMS</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              { isAuthenticated ? authLinks : guestLinks }
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default connect(mapStateToProps, { logoutUser }) (AppNavbar);
