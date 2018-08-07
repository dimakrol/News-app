import {combineReducers} from 'redux';
import countetReducer from './counter';
import articles from './articles';
import filters from './filters';
import comments from './comments';

export default combineReducers({
  count: countetReducer,
  articles, comments, filters
})
