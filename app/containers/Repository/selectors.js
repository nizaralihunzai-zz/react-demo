import { createSelector } from 'reselect';

/**
 * Direct selector to the repository state domain
 */
const selectRepositoryDomain = (state) => state.get('repository');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Repository
 */

const makeSelectRepository = () => createSelector(
  selectRepositoryDomain,
  (substate) => substate.toJS()
);

export default makeSelectRepository;
export {
  selectRepositoryDomain,
};
