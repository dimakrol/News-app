import {articles as defaultArticles} from "../fixtures";

export default (articlesState = defaultArticles, action) => {
  // console.log('--- articles state ===', articlesState);
  const {type} = action;

  switch (type) {
    case 'DELETE_ARTICLE': return articlesState
  }
  return articlesState;
}