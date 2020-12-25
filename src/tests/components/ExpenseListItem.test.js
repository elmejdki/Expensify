import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

const renderer = new ShallowRenderer();

it('should render ExpenseListItem with the giving expense', () => {
  renderer.render(<ExpenseListItem {...expenses[0]} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
