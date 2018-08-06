import {combineReducers} from 'redux';
import countetReducer from './counter';
import articles from './articles';

export default combineReducers({
  count: countetReducer,
  articles
})
