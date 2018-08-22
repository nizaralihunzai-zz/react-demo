/*
 *
 * Deployment reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  repos:[
    {
      title:'CardSecurityGroups / ASV CUSTOMER ACCOUNT INFORMATION',
      body: [
        {
          heading: 'Latest (QA)',
          author: 'austinshore',
          time: 'Monday, October 30 2017 at 05:44 pm',
          duration: '60 seconds',
          status:'Success',
        },
        {
          heading: 'Development',
          author: '',
          time: '',
          duration: '',
          status:'',
        },
        {
          heading: 'QA',
          author: 'austinshore',
          time: 'Monday, October 30 2017 at 05:44 pm',
          duration: '60 seconds',
          status:'Success',
        },
        {
          heading: 'Production',
          author: '',
          time: '',
          duration: '',
          status:'',
        },

      ]

    },
    
    {
      title:'CardSecurityGroups / ASV AQUISATION FULLFILLMENT',
      body: [
        {
          heading: 'Latest (QA)',
          author: 'austinshore',
          time: 'Monday, October 30 2017 at 05:44 pm',
          duration: '60 seconds',
          status:'Success',
        },
        {
          heading: 'Development',
          author: '',
          time: '',
          duration: '',
          status:'',
        },
        {
          heading: 'QA',
          author: 'austinshore',
          time: 'Monday, October 30 2017 at 05:44 pm',
          duration: '60 seconds',
          status:'Success',
        },
        {
          heading: 'Production',
          author: '',
          time: '',
          duration: '',
          status:'',
        },

      ]

    },
    {
      title:'CardSecurityGroups / ASV CUSTOMER ACCOUNT INFORMATION',
      body: [
        {
          heading: 'Latest (QA)',
          author: 'austinshore',
          time: 'Monday, October 30 2017 at 05:44 pm',
          duration: '60 seconds',
          status:'Success',
        },
        {
          heading: 'Development',
          author: '',
          time: '',
          duration: '',
          status:'',
        },
        {
          heading: 'QA',
          author: 'austinshore',
          time: 'Monday, October 30 2017 at 05:44 pm',
          duration: '60 seconds',
          status:'Success',
        },
        {
          heading: 'Production',
          author: '',
          time: '',
          duration: '',
          status:'',
        },

      ]

    },
    
    {
      title:'CardSecurityGroups / ASV AQUISATION FULLFILLMENT',
      body: [
        {
          heading: 'Latest (QA)',
          author: 'austinshore',
          time: 'Monday, October 30 2017 at 05:44 pm',
          duration: '60 seconds',
          status:'Success',
        },
        {
          heading: 'Development',
          author: '',
          time: '',
          duration: '',
          status:'',
        },
        {
          heading: 'QA',
          author: 'austinshore',
          time: 'Monday, October 30 2017 at 05:44 pm',
          duration: '60 seconds',
          status:'Success',
        },
        {
          heading: 'Production',
          author: '',
          time: '',
          duration: '',
          status:'',
        },

      ]

    },

  ],

});

function deploymentReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default deploymentReducer;
