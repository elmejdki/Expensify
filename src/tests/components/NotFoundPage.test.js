import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

const renderer = new ShallowRenderer();

it('should render NotFoundPage correctly', () => {
  renderer.render(<NotFoundPage />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
