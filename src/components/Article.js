import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'

class Article extends Component {

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    state = {
        updateIndex: 0
    }

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         isOpen: props.defaultOpen
    //     }
    // }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        // console.log('---', 'update Article');
        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen} >
                    {isOpen ? 'close' : 'open'}
                </button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log('--- ref', ref)
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen
    // }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <div>
                <section>{article.text}</section>
                <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>Update</button>
                <CommentList comments={article.comments} ref = {this.setCommentsRef} key={this.state.updateIndex}></CommentList>
            </div>
        )
    }

    setCommentsRef = ref => {
        console.log('---', ref)
    }
}

export default Article;
// export default function Article(props) {
//     const {article} = props;
//     return (
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }