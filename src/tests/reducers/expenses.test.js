import expensesReducer from '../../reducers/expenses';
import initState from '../fixtures/expenses';

it('should set default state', () => {
  const action = {
    type: '@@INIT',
  }

  const state = expensesReducer(undefined, action);

  expect(state).toEqual([]);
});

it('should add expense to state', () => {
  const expense = {
    id: '4',
    description: 'Gum',
    amount: 195,
    note: '',
    createdAt: 0
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense,
  }

  const state = expensesReducer(initState, action);

  expect(state).toEqual([
    ...initState,
    expense
  ])
});

it('should remove expense from state', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2',
  }

  const state = expensesReducer(initState, action);

  expect(state).toEqual([
    initState[0],
    initState[2],
  ])
});

it('should not remove expense from state', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-2',
  }

  const state = expensesReducer(initState, action);

  expect(state).toEqual(initState);
});

it('should edit expense in state', () => {
  const id = '2';
  const updates = {
    description: 'Gum',
    amount: 195,
    note: '',
    createdAt: 0
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }

  const state = expensesReducer(initState, action);

  expect(state).toEqual([
    initState[0],
    {
      id,
      ...updates,
    },
    initState[2],
  ])
});

it('should not edit expense in state', () => {
  const id = '-1';
  const updates = {
    description: 'Gum',
    amount: 195,
    note: '',
    createdAt: 0
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }

  const state = expensesReducer(initState, action);

  expect(state).toEqual(initState);
});
