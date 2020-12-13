import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  const id = props.match.params.id;

  return (
    <div>
      <ExpenseForm
        {...props.expense}
        onSubmit={(expense) => {
          props.editExpense(id, expense);
          props.history.push('/');
        }}
        isEdit={true}
      />
      <button
        onClick={() => {
          props.removeExpense(id);
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

const mapDispatchToProps = { editExpense, removeExpense };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);