import { createSelector } from 'reselect';

/**
 * Direct selector to the nimbusUsers state domain
 */
const selectNimbusUsersDomain = (state) => state.get('nimbusUsers');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NimbusUsers
 */

const makeSelectNimbusUsers = () => createSelector(
  selectNimbusUsersDomain,
  (substate) => substate.toJS()
);

export default makeSelectNimbusUsers;
export {
  selectNimbusUsersDomain,
};
