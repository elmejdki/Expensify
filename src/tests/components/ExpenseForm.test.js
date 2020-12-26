import { render } from 'node-sass';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

const renderer = new ShallowRenderer();

it('should render ExpenseForm with default data', () => {
  renderer.render(<ExpenseForm />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('should render ExpenseForm with expense data', () => {
  renderer.render(<ExpenseForm {...expenses[0]} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

// TODO: Add behavioral tests for Expenseform, AddExpense and EditExpense 
// Components using react testing library.
