import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenses from '../reducers/expenses';
import filters from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses,
      filters
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}