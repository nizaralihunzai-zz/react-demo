/**
 *
 * Sidebar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSidebar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {Nav, NavItem, NavLink} from 'reactstrap';
import './styles.css';

export class Sidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Sidebar</title>
          <meta name="description" content="Description of Sidebar" />
        </Helmet>

        <div className="sidebar">
          <Nav vertical>
            <NavItem>
              <NavLink href="#">Nimbus</NavLink>
            <hr/>
            </NavItem>
            <NavItem>
              <NavLink href="#">Requesters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Approvers</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="#">Deployers</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Admins</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Dispatcher Migration</NavLink>
              <hr />
            </NavItem>
            <NavItem>
              <NavLink href="#">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Need Help? </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Roadmap</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>

          </Nav>
        </div>
      
      </div>
    );
  }
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidebar: makeSelectSidebar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'sidebar', reducer });
const withSaga = injectSaga({ key: 'sidebar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Sidebar);
