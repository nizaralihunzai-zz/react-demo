/**
 *
 * Request
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
import makeSelectRequest from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Search from '../../../assets/images/search.png';
import { Table } from 'reactstrap';

export class Request extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  renderRequestItems = (items) => {
    if (items.length > 0) {
      return items.map((item) => {
        return (

            <tr key={Math.random()} >
            <td style={{ color: '#2980b9'}}>{item.title}</td>
              <td style={{}}>{item.date+' | '+item.time}</td>
            </tr>
        );
      });
    }
  }

  renderRequests = () => {
    if (this.props.request.requestList && this.props.request.requestList.length > 0) {
      return this.props.request.requestList.map((request) => {
        return (
          <div key={Math.random()} className="col-md-6">
              <div style={{width: '100%', minHeight:'340px',margin:'15px 10px', padding:'20px', border:'1px solid #ddd' }}>
              <h4  style={{ 
                marginBottom: '10px', 
                fontWeight: '400', 
                textTransform:'capitalize',   
                color: '#2980b9',
              }}>
                {request.title} 
              </h4>
              
                <div>
                  
                  <span style={{
                    marginRight: '20px',
                    color: '#e67e22',
                  }}>
                    {request.pending} Pending
                  </span>
                  
                  <span style={{
                    marginRight: '20px',
                    color: '#27ae60',
                  }}>
                    {request.accepted} Accepted
                  </span>

                  
                  <span style={{
                    marginRight: '20px',
                    color: '#c0392b',
                  }}>
                    {request.rejected} Rejected
                  </span>

                </div>
                <Table  style={{fontSize: '13px'}} >
                  <thead>
                    <tr>
                      <th>Request</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderRequestItems(request.requestItems)}
                  </tbody>
                </Table>
                
                <div style={{position: 'absolute', bottom:'20px'}}>
                <a style={{ color:'#2980b9'}} href=""> View All </a>
                </div>

              </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="container mainbody">
        <Helmet>
          <title>Request</title>
          <meta name="description" content="Description of Request" />
        </Helmet>
        <h2 className="text-center" style={{ marginBottom: '30px', fontWeight: '200', }} >Requests to Review </h2>
        <div className="row">
          <div className="col-md-6 offset-md-3 ">

            <Form style={{marginBottom: '50px'}} >
              <FormGroup>
              <div class="search">
                <input style={{width:'100%', padding:'10px' }} placeholder="Search by LOB" />
                <span style={{marginLeft:'-7%'}} className="fa fa-search"></span>
              </div>
              </FormGroup>
           
            </Form>


          </div>
        </div>

        <div className="row">
            {this.renderRequests()}
        </div>

      </div>
    );
  }
}

Request.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  request: makeSelectRequest(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'request', reducer });
const withSaga = injectSaga({ key: 'request', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Request);
