import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

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

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([
    ...expenses,
    expense
  ])
});

it('should remove expense from state', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2',
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([
    expenses[0],
    expenses[2],
  ])
});

it('should not remove expense from state', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-2',
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
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

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([
    expenses[0],
    {
      id,
      ...updates,
    },
    expenses[2],
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

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

it('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses
  }

  const state = expensesReducer({}, action);

  expect(state).toEqual(expenses);
});
