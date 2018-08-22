
import { fromJS } from 'immutable';
import nimbusUsersReducer from '../reducer';

describe('nimbusUsersReducer', () => {
  it('returns the initial state', () => {
    expect(nimbusUsersReducer(undefined, {})).toEqual(fromJS({}));
  });
});
