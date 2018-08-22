/*
 *
 * Repository actions
 *
 */

import {
  TEST_API,
  TEST_API_DATA,
} from './constants';

export function testApiAction() {
  return {
    type: TEST_API,
  };
}
export function testApiDataAction(payload) {
  return {
    type: TEST_API_DATA,
    payload
  };
}
