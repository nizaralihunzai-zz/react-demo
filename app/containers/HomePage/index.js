/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import styled from 'styled-components';

import './styles.css';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  // componentDidMount() {
  //   if (this.props.username && this.props.username.trim().length > 0) {
  //     this.props.onSubmitForm();
  //   }
  // }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      
        <div className='container-homepage'>
          <div className="row">
            <div className="col-md-12">
                <h3>Nimbus </h3>
                <hr/>

                <h5 style={{marginTop:'30px',marginBottom:'30px'}}>Your Privileged Infrastucture - Automated </h5>

                <p>Nimbus is a Capital One product of automating infrastucture deployments in the cloud. We focus on simplicity, accountability and customer service </p>
                <p style={{fontStyle:'italic'}}> The primary advantages of using Nimbus include: </p>

                <ul>
                  <li> <p> <strong>Automatic.</strong> No more changes via console, or having to upload your templates. </p> </li>
                  <li> <p> <strong>Self-service.</strong> All requests and deployments are made by application owners and their architects/ISOs.No more external teams or processes </p> </li>
                  <li> <p> <strong>Accountability.</strong> Code, changes, and conversations are all tracked and recorded. </p> </li>
                  <li> <p> <strong>Simplicity.</strong> A clean UI summarizing all requests, to help our customers quickly scan and handle their most important issues. </p> </li>
                  <li> <p> <strong>Security.</strong> Nimbus run Cloud Custodian against security group modifications to look for voilations of the <a href=""> enterprise compliance rules </a> . </p> </li>
                </ul>

                <hr />

                <h5 style={{ marginTop: '30px', marginBottom: '30px' }}>Background </h5>
                
                <p>Nimbus can be thought of as a CICD pipeline for infrastucture. Security groups and other infrastucture 
                  assets are templated as code and versioned using Github. 
                </p>

                <p>
                  Any change requests, submitted as Github pull request (PR) that have been approved and executed,
                   are then automatically deployed by our pipeline to the specified cloud accounts.
                </p>

                <p>
                  We use Github as a system of record for Nimbus which allows for automated 
                  tracking and recording of all conversations and approvals. This functionality supplements,
                  or optimally replaces,the need to have offline meetings for routine changes to infrastucture. 
                </p>

                <p>
                  To ensure proper security principles are being met, we run Cloud Custodian
                   against security group changes to check for voilations of the enterprise security group 
                   <a href="#"> compliance rules.</a> These checks will be displayed in every RP to alert Approvers.
                </p>

                <hr/>

                <div>
                  <h5 style={{ marginTop: '30px', marginBottom: '30px' }}>Nimbus Users </h5>
                    
                </div>

            </div>
          </div>
        </div>
      
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
