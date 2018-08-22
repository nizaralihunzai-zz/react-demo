
import { fromJS } from 'immutable';
import repositoryReducer from '../reducer';

describe('repositoryReducer', () => {
  it('returns the initial state', () => {
    expect(repositoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
