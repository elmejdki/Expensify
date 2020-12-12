import { createStore, combineReducers } from 'redux';
import expenses from '../reducers/expenses';
import filters from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses,
      filters
    })
  );

  return store;
}