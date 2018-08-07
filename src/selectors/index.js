import {createSelector} from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

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

// export function filtrateArticles({articles, filters}) {


  // return {
  //   articles: filteredArticles
  // }
// }