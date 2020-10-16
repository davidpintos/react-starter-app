import { combineReducers } from 'redux';
import {exampleReducer} from '../components/reducer';

export default combineReducers({
  hello: exampleReducer,
})