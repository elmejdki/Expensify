import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  getDateId = (date) => {
    return date ? date.format('Do MMMM, YYYY') : 'empty';
  }

  render() {
    const { filters, setTextFilter, sortByAmount, sortByDate } = this.props;
    const { text, sortBy, endDate, startDate } = filters;

    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              placeholder="Search expenses"
              type="text"
              value={text}
              onChange={(e) => {
                setTextFilter(e.target.value);
              }}
            />
          </div>
          <div className="input-group__item">
            <select
              value={sortBy}
              className="select"
              onChange={(e) => {
                if(e.target.value === 'amount') {
                  sortByAmount();
                }else if(e.target.value === 'date') {
                  sortByDate();
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={startDate}
              startDateId={this.getDateId(startDate)}
              endDate={endDate}
              endDateId={this.getDateId(endDate)}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
}

const mapDispatchToProps = {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);