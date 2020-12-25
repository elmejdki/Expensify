import {
  addExpense,
  removeExpense,
  editExpense
} from '../../actions/expenses';

it('should setup remove expense action object', () => {
  const action = removeExpense('abc123');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});

it('should setup edit expense action object', () => {
  const action = editExpense(
    '123abc',
    { description: 'hello world', amount: 123 }
  );

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'hello world',
      amount: 123
    }
  });
});

it('should setup add expense action object with provided values', () => {
  const expense = {
    description: 'expense description',
    note: 'this is a note for the expense',
    amount: 100,
    createdAt: 2001900
  };

  const action = addExpense(expense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    },
  });
});

it('should setup add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
