/**
 *
 * Repository
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
import makeSelectRepository from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './styles.css';
import { testApiAction } from './actions';

export class Repository extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props);

    this.state = {
      avsName: null,
      division: null,
      template: null,
      pointOfContact: null,
      applicationVpc: null,
      applicationVpcDetail: null, 
      connectedAsv: null,
      connectedAsvDetail: null,
      teamGithubUser: null,
      teamGithubUserDetail: null,
      customerFacing: false,
      interfacingWithThirdParty: false,

    }

  }

  componentDidMount() {
    this.props.testApi();
  }


  render() {
    return (
      <div className="container-fluid mainbody" >
        <Helmet>
          <title>Repository</title>
          <meta name="description" content="Description of Repository" />
        </Helmet>

        <h2 className="text-center" style={{marginBottom:'30px', fontWeight:'200', }} >Create New Repository </h2>
        
        <div className="row">
          <div className="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-12"  >
            <Form>  
              
              <FormGroup>
                <Label for="avsName">AVS Name</Label>
                <Input type="text" name="avsName" id="avsName" placeholder="AVS Name" />
              </FormGroup>
              
              <FormGroup>
                <Label for="division">LOB/Division</Label>
                <Input type="select" name="division" id="division" placeholder="LOB/Division" >
                  <option>Select LOB/Division </option>
                </Input>
              </FormGroup>
              
              <FormGroup>
                <Label for="template">Template</Label>
                <Input type="select" name="template" id="template" placeholder="Select Template Type">
                  <option>Select Template Type </option>
                </Input>
              </FormGroup>


              <FormGroup>
                <Label for="pointOfContact">Point of Contact EID</Label>
                <Input type="text" name="pointOfContact" id="pointOfContact" placeholder="Enter EID" />
              </FormGroup>
            
              <FormGroup>
                <Label for="applicationVpc">Application VPC(s)</Label>
                <Input type="select" name="applicationVpc" id="applicationVpc" placeholder="Add Application VPC" >
                  <option>Add Application VPC </option>              
                </Input>
            
                <Input style={{marginTop:'10px'}} type="textarea" name="applicationVpcDetail"  />
              </FormGroup>
            
              <FormGroup>
                <Label for="connectedAsv">Connected AVS</Label>
                <Input type="select" name="connectedAsv" id="connectedAsv" placeholder="Add Connected AVS" >
                  <option>Add Connected AVS</option>
                
                </Input>
            
                <Input style={{ marginTop: '10px' }} type="textarea" name="connectedAsvDetail"  />
              </FormGroup>
            
              <FormGroup>
                <Label for="teamGithubUser">Team Github User(s)</Label>
                <Input type="select" name="teamGithubUser" id="teamGithubUser" placeholder="Add Team Github User" >
                  <option>Add Team Github ID</option>
                
                </Input>
            
                <Input style={{ marginTop: '10px' }} type="textarea" name="teamGithubUserDetail"  />
              </FormGroup>
            
              <Label>Is your application...</Label>
             
              <FormGroup check>
                <Label check>
                <Input type="checkbox" name="customerFacing" id="customerFacing" />
                  A customer-facing application
                </Label>
              </FormGroup>
            
              <FormGroup check>
                <Label check>
                <Input type="checkbox" name="interfacingWithThirdParty" id="interfacingWithThirdParty" />
                  Interface with a third party
                </Label>
              </FormGroup>

              
              <Button color="success" className="submit-button" >Create Repository</Button>
          
            </Form>
          </div>
        </div>

      </div>
    );
  }
}

Repository.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  repository: makeSelectRepository(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    testApi: () => dispatch(testApiAction()),

  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'repository', reducer });
const withSaga = injectSaga({ key: 'repository', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Repository);
