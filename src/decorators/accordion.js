import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
    constructor(props) {
        super(props)
        this.state = {
            openItemId: props.defaultOpenId
        }
    }

    render() {
        return <OriginalComponent {...this.props}
                                  openItemId={this.state.openItemId}
                                  toggleOpenItem={this.toggleOpenItem.bind(this)}
        />
    }

    toggleOpenItem(openItemId) {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}