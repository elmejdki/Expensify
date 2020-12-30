import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = (props) => {
  const id = props.match.params.id;

  return (
    <div>
      <ExpenseForm
        {...props.expense}
        onSubmit={(expense) => {
          props.startEditExpense(id, expense);
          props.history.push('/');
        }}
        isEdit={true}
      />
      <button
        onClick={() => {
          props.startRemoveExpense(id);
          props.history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  };
}

const mapDispatchToProps = { startEditExpense, startRemoveExpense };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);