import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expenses from '../reducers/expenses';
import filters from '../reducers/filters';
import auth from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses,
      filters,
      auth
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}