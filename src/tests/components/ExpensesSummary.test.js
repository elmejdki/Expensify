import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';

const renderer = new ShallowRenderer();

it('should render ExpensesSummary correctly with a count of 1', () => {
  renderer.render(<ExpensesSummary expenseCount={1} expensesTotal={300} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('should render ExpensesSummary correctly with a count different than 1', () => {
  renderer.render(<ExpensesSummary expenseCount={1} expensesTotal={300} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
