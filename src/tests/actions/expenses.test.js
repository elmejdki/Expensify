import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  startSetExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'thisismyuniqueuid';

beforeEach((done) => {
  const expensesData = {};

  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

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

it('should edit expense on firebase', (done) => {
  const store = createMockStore({ auth: { uid } });
  const id = expenses[0].id;
  const updates = {
    description: 'New description',
    amount: 300
  }

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });

    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    const { description, amount } = snapshot.val();

    expect(description).toBe(updates.description);
    expect(amount).toBe(updates.amount);

    done();
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
  const store = createMockStore({ auth: { uid } });

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

    const expenseRef = database.ref(`users/${uid}/expenses/${actions[0].expense.id}`);

    return expenseRef.once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

it('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({ auth: { uid } });

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

    const expenseRef = database.ref(`users/${uid}/expenses/${actions[0].expense.id}`);

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
  const store = createMockStore({ auth: { uid } });

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });

    return database.ref(`users/${uid}/expenses`).once('value');
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
  const store = createMockStore({ auth: { uid } });
  const id = expenses[1].id;

  store.dispatch(startRemoveExpense(id)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });

    return database.ref(`users/${uid}/expenses`).once('value');
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
