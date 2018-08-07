import React, {Component} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

class ArticleList extends Component {

    static propTypes = {
        //from connect
        articles: PropTypes.arrayOf(PropTypes.object),
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render() {
        // const moment = extendMoment(Moment);
        // const {from, to} = this.props.selectedDates;
        // const selectedIds = this.props.selectedArticles.map((selected) => selected.value );
        //
        // let articlesToDisplay = this.props.articles;
        // if (from && to) {
        //   const momentFrom = moment(from);
        //   const momentTo = moment(to);
        //   const range = moment().range(momentFrom, momentTo);
        //   articlesToDisplay = articlesToDisplay.filter((article) => {
        //     return range.contains(moment(article.date))
        //   });
        // }
        //
        // if (selectedIds.length) {
        //   articlesToDisplay = articlesToDisplay.filter((article) => {
        //     return selectedIds.includes(article.id)
        //   });
        // }

        const articleElements = this.props.articles.map((article) =>
          <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id == this.props.openItemId}
                toggleOpen = {this.props.toggleOpenItem.bind(this, article.id)}
            />
          </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}
// export default connect(state => ({
//   articles: state.articles,
//   selectedArticles: state.filters.selected,
//   selectedDates: state.filters.selectedDates
//   // defaultOpenId: state.articles[0].id//default open article id
// }))(accordion(ArticleList));
export default connect(({articles, filters}) => {
  const {selected, selectedDates: {from, to}} = filters;

  const selectedIds = selected.map((selected) => selected.value );

  const filteredArticles = articles.filter(article => {
    const published = Date.parse(article.date);
    return (!selected.length || selectedIds.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
  })

  return {
    articles: filteredArticles
  }

})(accordion(ArticleList))
