import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
    state = {
        openItemId: null
    };

    render() {
        return <OriginalComponent {...this.props}
                                  openItemId={this.state.openItemId}
                                  toggleOpenItem={this.toggleOpenItem.bind(this)}
        />

        // const articleElements = this.props.articles.map((article) => <li key={article.id}>
        //     <OriginalComponent
        //         {...this.props} {...this.state}
        //         article = {article}
        //         isOpen = {article.id == this.state.openItemId}
        //         toggleOpen = {this.toggleOpenItem.bind(this, article.id)}
        //     />
        // </li>);
        //
        // return (
        //     <ul>
        //         {articleElements}
        //     </ul>
        // )
    }

    toggleOpenItem(openItemId) {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}