import React, {Component} from 'react';
import Article from './Article';
import toggleOpen from '../decorators/toggleOpen';

class ArticleList extends Component {
    // state = {
    //     openArticleId: null
    // };

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

    // toggleOpenArticle(openArticleId) {
    //     if (this.state.openArticleId == openArticleId) {
    //         this.setState({ openArticleId: null });
    //         return;
    //     }
    //     this.setState({ openArticleId })
    // }


}
export default toggleOpen(ArticleList);