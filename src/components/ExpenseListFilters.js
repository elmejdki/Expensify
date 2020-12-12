import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = ({ filters, setTextFilter, sortByAmount, sortByDate }) => (
  <div>
    <input
      type="text"
      value={filters.text}
      onChange={(e) => {
        setTextFilter(e.target.value);
      }}
    />
    <select
      value={filters.sortBy}
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
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
}

const mapDispatchToProps = {
  setTextFilter,
  sortByAmount,
  sortByDate
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);