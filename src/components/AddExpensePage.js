import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.startAddExpense(expense);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = { startAddExpense };

export default connect(null, mapDispatchToProps)(AddExpensePage);