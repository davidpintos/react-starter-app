import { combineReducers } from 'redux';
import {countReducer} from '../counter/reducer';

export default combineReducers({
  countReducer,
})