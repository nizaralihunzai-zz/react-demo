/**
 *
 * NimbusUsers
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
import makeSelectNimbusUsers from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class NimbusUsers extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>NimbusUsers</title>
          <meta name="description" content="Description of NimbusUsers" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

NimbusUsers.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  nimbususers: makeSelectNimbusUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'nimbusUsers', reducer });
const withSaga = injectSaga({ key: 'nimbusUsers', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NimbusUsers);
