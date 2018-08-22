import { createSelector } from 'reselect';

/**
 * Direct selector to the deployment state domain
 */
const selectDeploymentDomain = (state) => state.get('deployment');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Deployment
 */

const makeSelectDeployment = () => createSelector(
  selectDeploymentDomain,
  (substate) => substate.toJS()
);

export default makeSelectDeployment;
export {
  selectDeploymentDomain,
};
