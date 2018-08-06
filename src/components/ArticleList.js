import React, {Component} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import PropTypes from "prop-types";
import {connect} from 'react-redux';

class ArticleList extends Component {

    static propTypes = {
        //from connect
        articles: PropTypes.arrayOf(PropTypes.object),
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render() {

        const selectedIds = this.props.selectedArticles.map((selected) => selected.value );

        let articlesToDisplay = this.props.articles;
        if (selectedIds.length) {
          articlesToDisplay = articlesToDisplay.filter((article) => {
            return selectedIds.includes(article.id)
          });
        }

        const articleElements = articlesToDisplay.map((article) =>
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
export default connect(state => ({
  articles: state.articles,
  selectedArticles: state.filters.selected
  // defaultOpenId: state.articles[0].id//default open article id
}))(accordion(ArticleList));