import getCurrentTime from '../utils/getCurrentTime.js';
import { ADD_CURRENT_TIME, CLEAR_ALL_TIMES } from './actionTypes.js';
// import * as actionTypes from './actionTypes.js'<=another way to import Types

export function addCurrentTime() {
  return {
    type: ADD_CURRENT_TIME,
    payload: getCurrentTime(),
  };
}

export function clearTimes() {
  return {
    type: CLEAR_ALL_TIMES,
  };
}
