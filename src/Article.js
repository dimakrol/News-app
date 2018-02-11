import React, {Component} from 'react'
import CommentList from './CommentList';

export default class Article extends Component {

    constructor(props) {
        console.log(props.article);
        super(props);

        this.state = {
            isOpen: false
        };

        // this.toggleOpen = this.toggleOpen.bind(this);
    }
    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen} >
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return (
            <div>
                <section>{article.text}</section>
                <CommentList comments={article.comments}></CommentList>
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

// export default function Article(props) {
//     const {article} = props;
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }