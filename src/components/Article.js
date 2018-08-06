import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import { CSSTransitionGroup } from 'react-transition-group'
import './article.css'
import AddComment from './AddComment/AddComment';

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
    };

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         isOpen: props.defaultOpen
    //     }
    // }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div ref={this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen} >
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick={this.handleDelete}>
                  Delete
                </button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}
                    component='div'
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }
    handleDelete = () => {
      console.log('---', ' Delete this');
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <div>
              <section>{article.text}</section>
              <CommentList comments={article.comments}></CommentList>
              <br/>
              <div>
                <AddComment/>
              </div>
            </div>
        )
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