import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.addExpense(expense);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = { addExpense };

export default connect(null, mapDispatchToProps)(AddExpensePage);