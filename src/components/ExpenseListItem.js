import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, removeExpense }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {
        new Date(createdAt)
          .toString()
          .match(/^\w{3}(\s*.)+\s\d{4}/)[0] }
    </p>
    <button
      onClick={() => {
        removeExpense(id); 
      }}
    >
      Remove
    </button>
  </div>
);

const mapDispatchToProps = { removeExpense };

export default connect(null, mapDispatchToProps)(ExpenseListItem);