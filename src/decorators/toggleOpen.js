import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        openArticleId: null
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state}
                                  openArticleId={this.state.openArticleId}
                                  toggleOpenArticle={this.toggleOpenArticle.bind(this, )}
        />

        // const articleElements = this.props.articles.map((article) => <li key={article.id}>
        //     <OriginalComponent
        //         {...this.props} {...this.state}
        //         article = {article}
        //         isOpen = {article.id == this.state.openArticleId}
        //         toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
        //     />
        // </li>);
        //
        // return (
        //     <ul>
        //         {articleElements}
        //     </ul>
        // )
    }

    toggleOpenArticle(openArticleId) {
        if (this.state.openArticleId == openArticleId) {
            this.setState({ openArticleId: null });
            return;
        }
        this.setState({ openArticleId })
    }
}