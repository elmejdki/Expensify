import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { LoginPage } from '../../components/LoginPage';

const renderer = new ShallowRenderer();

it('should render LoginPage correctly', () => {
  renderer.render(<LoginPage />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
