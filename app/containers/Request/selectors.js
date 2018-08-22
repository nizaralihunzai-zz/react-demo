import { createSelector } from 'reselect';

/**
 * Direct selector to the request state domain
 */
const selectRequestDomain = (state) => state.get('request');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Request
 */

const makeSelectRequest = () => createSelector(
  selectRequestDomain,
  (substate) => substate.toJS()
);

export default makeSelectRequest;
export {
  selectRequestDomain,
};
