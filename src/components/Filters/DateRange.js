import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeDate} from '../../AC';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DateRange extends Component {
  // state = {
  //   from: null,
  //   to: null
  // };

  handleDayClick = (day) => {
    const {from, to} = DateUtils.addDayToRange(day, this.props.selectedDates);
    this.props.changeDate(from, to);
  };

  render() {
    const {from, to} = this.props.selectedDates;
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;

    return (
      <div className="date-range">
        <DayPicker
          ref="daypicker"
          selectedDays={ day => DateUtils.isDayInRange(day, {from, to}) }
          onDayClick={ this.handleDayClick }
        />
        {selectedRange}
      </div>
    )
  }
}
export default connect(state => ({
  articles: state.articles,
  selectedDates: state.filters.selectedDates
}), {changeDate})(DateRange);