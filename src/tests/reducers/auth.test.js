import authReducer from '../../reducers/auth';

it('should set default state', () => {
  const action = {
    type: '@@INIT',
  }

  const state = authReducer(undefined, action);

  expect(state).toEqual({});
});

it('should set uid in state', () => {
  const action = {
    type: 'LOGIN',
    uid: 123
  }

  const state = authReducer({}, action);

  expect(state).toEqual({
    uid: 123
  });
});

it('should remove uid from state', () => {
  const action = {
    type: 'LOGOUT',
  }

  const state = authReducer({ uid: 123 }, action);

  expect(state).toEqual({});
});