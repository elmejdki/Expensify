import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesTotal, expenseCount }) => {
  const expenseText = expenseCount === 1 ? 'expense' : 'expenses';
  const total = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseText} totalling <span>{total}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
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
