import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

beforeEach((done) => {
  const expensesData = {};

  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  database.ref('expenses').set(expensesData).then(() => done());
});

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[0]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  });
});

it('should add expense to database and store', (done) => {
  const store = createMockStore({});

  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    const expenseRef = database.ref(`expenses/${actions[0].expense.id}`);

    return expenseRef.once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

it('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});

  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpense
      }
    });

    const expenseRef = database.ref(`expenses/${actions[0].expense.id}`);

    return expenseRef.once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpense);
    done();
  });
});

it('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

it('should fetch expenses from firebase', (done) => {
  const store = createMockStore({});

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });

    return database.ref('expenses').once('value');
  }).then((snapshot) => {
    const firebaseExpenses = [];

    snapshot.forEach((childSnapshot) => {
      firebaseExpenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    expect(firebaseExpenses).toEqual(expenses);

    done();
  });
});

it('should remove expense from firebase', (done) => {
  const store = createMockStore({});

  store.dispatch(startRemoveExpense('2')).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '2'
    });

    return database.ref('expenses').once('value');
  }).then((snapshot) => {
    const firebaseExpenses = [];

    snapshot.forEach((childSnapshot) => {
      firebaseExpenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    expect(firebaseExpenses).toEqual([
      expenses[0],
      expenses[2]
    ]);

    done();
  });
});
