import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import LoadingPage from '../../components/LoadingPage';

const renderer = new ShallowRenderer();

it('should render LoadingPage correctly', () => {
  renderer.render(<LoadingPage />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
