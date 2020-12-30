import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { AddExpensePage } from '../../components/AddExpensePage';

const renderer = new ShallowRenderer();

it('should render AddExpensePage correctly', () => {
  renderer.render(<AddExpensePage />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
