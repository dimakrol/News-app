import React, {Component} from 'react';
import Article from './Article';
import accordion from '../decorators/accordion';
import PropTypes from "prop-types";

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object),
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    };

    render() {
        const articleElements = this.props.articles.map((article) => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id == this.props.openItemId}
                toggleOpen = {this.props.toggleOpenItem.bind(article.id)}
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