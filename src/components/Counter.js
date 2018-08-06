import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from "../AC";

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  };

  render () {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handleIncrement}>Increment that</button>
      </div>
    )
  }

  handleIncrement = () => {
    this.props.increment();
    console.log('--- handle increment ---')
  }
  // handleIncrement = () => {
  //   this.props.dispathIcrement();
  //   console.log('--- handle increment ---')
  // }
}

function mapStateToProps(state) {
  return {
    counter: state.count
  }
}
const mapToDispatch = { increment };
// const mapToDispatch = {
//   dispathIcrement: increment
// };

const decorator = connect(mapStateToProps, mapToDispatch);

export default decorator(Counter);