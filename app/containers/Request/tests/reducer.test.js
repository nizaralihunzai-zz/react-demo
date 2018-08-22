
import { fromJS } from 'immutable';
import requestReducer from '../reducer';

describe('requestReducer', () => {
  it('returns the initial state', () => {
    expect(requestReducer(undefined, {})).toEqual(fromJS({}));
  });
});
