import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesTotal, expenseCount }) => {
  const expenseText = expenseCount === 1 ? 'expense' : 'expenses';
  const total = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <>
      <h3>
        Viewing {expenseCount} {expenseText} totalling {total}
      </h3>
    </>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const total = selectTotal(visibleExpenses);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: total
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
