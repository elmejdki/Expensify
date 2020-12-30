import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';

const renderer = new ShallowRenderer();

it('should render EditExpensePage correctly', () => {
  const props = {
    history: [],
    match: {
      params: {
        id: 2
      }
    }
  }

  renderer.render(<EditExpensePage {...props} />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
