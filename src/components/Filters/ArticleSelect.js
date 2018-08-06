import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeSelection} from '../../AC';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ArticleSelect extends Component {
  state = {
    // selection: []
  };

  render() {
    const options = this.props.articles.map(article => ({
        label: article.title,
        value: article.id,
    }));

    return (
      <Select
              options = {options}
              value={this.props.selected}
              onChange={this.changeSelection}
              multi
      />
    )
  }
  changeSelection = selection => {
    this.setState({ selection });
    this.props.changeSelection(selection);
  }
}

export default connect(state => ({
  articles: state.articles,
  selected: state.filters.selected
}), {changeSelection})(ArticleSelect);