import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

const renderer = new ShallowRenderer();

it('should render ExpenseList with expenses', () => {
  renderer.render(<ExpenseList expenses={expenses} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('should render ExpenseList with empty message', () => {
  renderer.render(<ExpenseList expenses={[]} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
