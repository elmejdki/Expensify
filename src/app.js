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

import moment from 'moment';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Water bill',
  amount: 3000,
  createdAt: moment().add(5, 'days').valueOf()
}));

store.dispatch(addExpense({
  description: 'Rent bill',
  amount: 343,
  createdAt: moment().valueOf()
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 5500,
  createdAt: moment().subtract(2, 'days').valueOf()
}));


const { expenses, filters } = store.getState();

console.log(getVisibleExpenses(expenses, filters));

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
