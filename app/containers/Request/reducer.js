/*
 *
 * Request reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  requestList: [
    {
      title: 'card',
      pending: 30,
      accepted: 50,
      rejected: 20,
      requestItems:[
          {
            title: 'ASVCLOUDFRONTEND#14',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#15',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#16',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          
      ],
    },
    {
      title: 'commercial',
      pending: 30,
      accepted: 50,
      rejected: 20,
      requestItems:[
          {
            title: 'ASVCLOUDFRONTEND#14',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#15',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#16',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          
      ],
    },
    { 
      title:'cyber',
      pending: 30,
      accepted: 50,
      rejected: 20,
      requestItems:[
          {
            title: 'ASVCLOUDFRONTEND#14',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#15',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#16',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          
      ],
    },
    {

      title:'digital',
      pending: 30,
      accepted: 50,
      rejected: 20,
      requestItems:[
          {
            title: 'ASVCLOUDFRONTEND#14',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#15',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#16',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          
      ],
    },
    {  
      title:'fs',
      pending: 30,
      accepted: 50,
      rejected: 20,
      requestItems:[
          {
            title: 'ASVCLOUDFRONTEND#14',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#15',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#16',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          
      ],
    },
    {  
      title: 'retail',
      pending: 30,
      accepted: 50,
      rejected: 20,
      requestItems:[
          {
            title: 'ASVCLOUDFRONTEND#14',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#15',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#16',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          
      ],
    },
    { 
      title: 'shared-tech',
      pending: 30,
      accepted: 50,
      rejected: 20,
      requestItems:[
          {
            title: 'ASVCLOUDFRONTEND#14',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#15',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          {
            title: 'ASVCLOUDFRONTEND#16',
            date: '01/01/2018',
            time: '03:20 pm',
          },
          
      ],
    }
  ],


});

function requestReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default requestReducer;
