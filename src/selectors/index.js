import {createSelector} from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;


export const filtrateArticlesSelector = createSelector(articlesGetter, filtersGetter,
  (articles, filters) => {
    const {selected, selectedDates: {from, to}} = filters;

    const selectedIds = selected.map((selected) => selected.value );

    return articles.filter(article => {
      const published = Date.parse(article.date);
      return (!selected.length || selectedIds.includes(article.id)) &&
        (!from || !to || (published > from && published < to))
    })
});

export const commentSelectorFactory = () => {
  return createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id];
    // return comments.find(comment => comment.id === id)
  });
};

// export function filtrateArticles({articles, filters}) {


  // return {
  //   articles: filteredArticles
  // }
// }