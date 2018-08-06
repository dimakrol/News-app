import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ArticleSelect extends Component {
  state = {
    selection: null
  };

  render() {
    const options = this.props.articles.map(article => ({
        label: article.title,
        value: article.id,
    }));

    return (
      <Select
              options = {options}
              value={this.state.selection}
              onChange={this.changeSelection}/>
    )
  }
  changeSelection = selection => this.setState({ selection })
}

export default connect(state => ({
  articles: state.articles,
}))(ArticleSelect);