/*
 *
 * Repository reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TEST_API,
  TEST_API_DATA,
} from './constants';

const initialState = fromJS({
  testData:{}
});

function repositoryReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_API_DATA:
      return state.set('testData', action.payload);
    default:
      return state;
  }
}

export default repositoryReducer;
