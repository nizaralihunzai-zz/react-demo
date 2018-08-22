import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
   NavItem, NavLink, UncontrolledDropdown, Dropdown, DropdownMenu, 
   DropdownItem, DropdownToggle  } from 'reactstrap';
   
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer'; 

import { makeSelectCurrentUser} from 'containers/App/selectors';
// Import required images


import Logo from '../../../assets/logo/logo.png';

import './styles.css';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getNavItems(){
    if (this.props) {
      return(
        <span>
          <NavItem>
            <Link
              to=""
              className="btn btn-outline-primary btn_signup">Create Repository</Link>
          </NavItem>

          <NavItem>
            <Link
              to=""
              className="btn btn-outline-success btn_login">Requests</Link>
          </NavItem>

          <NavItem>
            <Link
              to=""
              className="btn btn-outline-success btn_login">Deployments</Link>
          </NavItem>

          <NavItem>
            <Link
              to=""
              className="btn btn-outline-success btn_login">Documentation</Link>
          </NavItem>

        </span>
      );
    }
    else{
      return (
        <div>
          <NavItem>
              <img style={{ borderRadius: '50%', background: '#ddd' }} src="#" />
          </NavItem>
          <NavItem>
            <UncontrolledDropdown nav inNavbar>
             
              <DropdownToggle nav caret>
                <a className=" "> Marquis</a>
              </DropdownToggle>
              
            </UncontrolledDropdown>
          </NavItem>

        </div>
      );
    }

  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md" className="fixed-top" 
          style={{ background: '#222f3e', height: '70px'}}  >
          <NavbarBrand href="/" style={{
            color: 'white',
            letterSpacing: '1px',
    
          }} > 
          
            Nimbus         
          </NavbarBrand>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar style={{ background: '#222f3e', }}  >
              <NavItem>
                <Link
                  to="/repository"
                  className="btn btn-outline-secondary btn-nav-custom ">Create Repository</Link>
              </NavItem>

              <NavItem>
                <Link
                  to="/requests"
                  className="btn btn-outline-secondary btn-nav-custom ">Requests</Link>
              </NavItem>

              <NavItem>
                <Link
                  to="/deployments"
                  className="btn btn-outline-secondary btn-nav-custom ">Deployments</Link>
              </NavItem>

              <NavItem>
                <Link
                  to=""
                  className="btn btn-outline-secondary btn-nav-custom ">Teams</Link>
              </NavItem>

              <NavItem>
                <Link
                  to=""
                  className="btn btn-outline-secondary btn-nav-custom ">Documentation</Link>
              </NavItem>


            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}



Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}



NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
