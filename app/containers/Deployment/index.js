/**
 *
 * Deployment
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
import makeSelectDeployment from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Deployment extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  renderItems = (body) => {
    if (body.length > 0) {
      return body.map((item) => {
        return (
          <div className="col-md-3">
            <div style={{  marginTop:'10px' }} className="box" >
              <p style={{ color: '#2980b9',  borderBottom: '1px solid #7f8c8d',fontWeight:'500' , paddingBottom: '3px'}} > {item.heading} </p>
              <p> <strong> Author: </strong> {(item.author) ?item.author:'---'} </p>
              <p> <strong> Time: </strong> {(item.time)?item.time: '---'} </p>
              <p> <strong> Duration: </strong> {(item.duration)?item.duration: '---'} </p>
              <p> <strong> Status: </strong>  {(item.status)?  item.status :'---'} </p>

            </div>
          </div>
        );
      });
    }
  }

  renderRepos = () => {
    if (this.props.deployment.repos && this.props.deployment.repos.length > 0) {
      return this.props.deployment.repos.map((repo) => {
        return (
          <div style={{ width: '100%', padding: '20px', border: '1px solid #ccc', marginBottom: '20px', borderLeft: '15px solid #27ae60' }} >
            <div className="row">
              <div className="col-md-10 col-sm-10">
                <h5 style={{
                  marginBottom: '10px',
                  textTransform: 'capitalize',
                  color: '#2980b9',
                 }} > {repo.title} </h5>
              </div>
              <div className="col-md-2 col-sm-2">
                 
                <i style={{paddingLeft: '5px'}}  className="pull-right fa fa-github-alt" aria-hidden="true"></i>
                <i style={{paddingLeft: '5px'}}  className="pull-right fa fa-chrome" aria-hidden="true"></i>
              </div>
            </div>
            
            <div className="row">
                 {this.renderItems(repo.body)}
            </div>
            <div className="row">
              <div className="col-md-12 box">
                <a style={{ color:'#2980b9'}} 
                 href="#"
                 > 
                  <i style={{margin:'5px'}} className="fa fa-plus-circle" aria-hidden="true"></i>
                  View Changelog  
                </a>
              </div>
            </div>
          
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="container-fluid mainbody" >
        <Helmet>
          <title>Deployment</title>
          <meta name="description" content="Description of Deployment" />
        </Helmet>
        <h2 className="text-center" style={{ marginBottom: '30px', fontWeight: '200', }} >Deployments </h2>
        <div className="row">
          <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12 ">

            <Form style={{ marginBottom: '50px' }} >
              <FormGroup>
                <div class="search">
                  <input style={{ width: '100%', padding: '10px' }} placeholder="Search by Github Organization/Repository" />
                  <span style={{ marginLeft: '-7%' }} className="fa fa-search"></span>
                </div>
                <div>
                   <p className="text-center" style={{margin:'10px'}}> Displaying 10 out of 455 results </p>
                </div>
              </FormGroup>
            </Form>


          </div>
        </div>

        <div className="row" style={{ margin: '0 20px' }} >
          <div className="col-md-12">
            {this.renderRepos()}
          </div>
        </div>

      </div>
    );
  }
}

Deployment.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  deployment: makeSelectDeployment(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'deployment', reducer });
const withSaga = injectSaga({ key: 'deployment', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Deployment);
