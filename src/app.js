import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

const expense = store.dispatch(addExpense({
  description: 'Water bill',
  amount: 3000,
  createdAt: 1035942535349
}));

store.dispatch(addExpense({
  description: 'Rent bill',
  amount: 343,
  createdAt: 1215942535349
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 5500,
  createdAt: 915942535349
}));


const { expenses, filters } = store.getState();
console.log(getVisibleExpenses(expenses, filters));

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
