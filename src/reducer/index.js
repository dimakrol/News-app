import {combineReducers} from 'redux';
import countetReducer from './counter';

export default combineReducers({
  count: countetReducer
})
