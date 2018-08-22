/**
 *
 * Landing
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
import makeSelectLanding from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Sidebar from 'containers/Sidebar/Loadable';
import HomePage from 'containers/HomePage/Loadable';

export class Landing extends React.Component { // eslint-disable-line react/prefer-stateless-function
  

  render() {
    return (
      <div className="container-fluid" style={{ background:'#f1f2f6'}} >
        <Helmet>
          <title>Landing</title>
          <meta name="description" content="Description of Landing" />
        </Helmet>
        
        <div className="row">
          <div className="col-md-3 col-sm-3 col-12" style={{ maxWidth:'20%'}}>
            <Sidebar/>            
          </div>
          
          <div className="col-md-9 col-sm-9 col-12">
            <HomePage/>
          </div>

        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  landing: makeSelectLanding(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'landing', reducer });
const withSaga = injectSaga({ key: 'landing', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Landing);
