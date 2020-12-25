import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

const renderer = new ShallowRenderer();

it('should render ExpenseDashboardPage correctly', () => {
  renderer.render(<ExpenseDashboardPage />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
