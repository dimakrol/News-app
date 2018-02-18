import React, {Component} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import PropTypes from "prop-types";

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object)
    };

    render() {
        const articleElements = this.props.articles.map((article) => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id == this.props.openArticleId}
                toggleOpen = {this.props.toggleOpenArticle.bind(this, article.id)}
            />
        </li>);

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}
export default accordion(ArticleList);