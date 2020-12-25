import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/Header';

const renderer = new ShallowRenderer();

it('should render Header correctly', () => {
  renderer.render(<Header />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
