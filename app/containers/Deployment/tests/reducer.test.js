
import { fromJS } from 'immutable';
import deploymentReducer from '../reducer';

describe('deploymentReducer', () => {
  it('returns the initial state', () => {
    expect(deploymentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
