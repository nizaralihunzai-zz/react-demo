
import { fromJS } from 'immutable';
import landingReducer from '../reducer';

describe('landingReducer', () => {
  it('returns the initial state', () => {
    expect(landingReducer(undefined, {})).toEqual(fromJS({}));
  });
});
