import React, {Component} from 'react'
// import CommentList from './CommentList';

export default class Comment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };

        // this.toggleOpen = this.toggleOpen.bind(this);
    }
    render() {
        const {isOpen} = this.state;
        return (
            <div>
                <br/>
                {this.getBody()}
                <br />
                <button onClick = {this.toggleOpen} >
                    {isOpen ? 'close' : 'open'}
                </button>
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {comment} = this.props;
        return (
            <div>
                <section>{comment.text}</section>
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}