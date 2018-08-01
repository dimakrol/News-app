import React, {Component} from 'react';
import './AddComment.css'

class AddComment extends Component {
  state = {
    user: '',
    text: ''
  };


  render() {
    return (
      <form onSubmit={this.sendData}>
        user: <input value={this.state.user}
                     onChange={this.changeInputHandler('user')}
                     className={this.getInputClass('user')}/>
        <br/>
        text: <input type="text"
                     value={this.state.text}
                     onChange={this.changeInputHandler('text')}
                     className={this.getInputClass('text')}/>
        <br/>
        <input type="submit"/>
      </form>
    )
  }

  changeInputHandler = (type) => (ev) => {
    if (this.state[type].length > restrict[type].max) return;
    this.setState({[type] : ev.target.value})
  };

  getInputClass = (type) => {
    return this.state[type].length && this.state[type].length < restrict[type].min ? 'error-message' : '';
  };

  sendData = (event) => {
    event.preventDefault();
    this.setState({user: '', text: ''})
  }
}

const restrict = {
  user: {
    min: 5,
    max: 15,
  },
  text: {
    min: 20,
    max: 50,
  }
}

export default AddComment;