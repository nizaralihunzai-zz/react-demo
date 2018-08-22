import { createSelector } from 'reselect';

/**
 * Direct selector to the landing state domain
 */
const selectLandingDomain = (state) => state.get('landing');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Landing
 */

const makeSelectLanding = () => createSelector(
  selectLandingDomain,
  (substate) => substate.toJS()
);

export default makeSelectLanding;
export {
  selectLandingDomain,
};
