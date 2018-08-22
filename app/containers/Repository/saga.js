import { takeLatest, call, put, select } from 'redux-saga/effects';
import { testApi} from './api';

// local imports 
import { TEST_API } from './constants';

import { testApiDataAction } from './actions'; 


export function* test(params) {
  try {
    const response = yield call(testApi);
    console.log(response);
    yield put(testApiDataAction(response));

  } catch (e) {
    console.log('error part');
    console.log(e);
  }

}


// Individual exports for testing
export default function* defaultSaga() {

  yield takeLatest(TEST_API, test);
  // See example in containers/HomePage/saga.js
}
