import {combineReducers} from 'redux';
import countetReducer from './counter';
import articles from './articles';
import filters from './filters';

export default combineReducers({
  count: countetReducer,
  articles, filters
})
