import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.subscribe(() => {
  const { expenses, filters } = store.getState();
  console.log(getVisibleExpenses(expenses, filters));
})

const expense = store.dispatch(addExpense({
  description: 'Water bill',
  amount: 3000,
  createdAt: 83495349
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 5500,
  createdAt: 532790
}));

// store.dispatch(editExpense(expense.expense.id, { amount: 30 }));

store.dispatch(setTextFilter('water'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
