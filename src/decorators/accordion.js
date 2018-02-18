import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
    state = {
        openItemId: null
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state}
                                  openItemId={this.state.openItemId}
                                  toggleOpenArticle={this.toggleOpenArticle.bind(this)}
        />

        // const articleElements = this.props.articles.map((article) => <li key={article.id}>
        //     <OriginalComponent
        //         {...this.props} {...this.state}
        //         article = {article}
        //         isOpen = {article.id == this.state.openItemId}
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

    toggleOpenArticle(openItemId) {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}