import database from '../firebase/firebase';

export const addExpense = (expense = {}) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((snapshot) => {
      dispatch(addExpense({
        id: snapshot.key,
        ...expense
      }));
    });
  }
}

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = (id) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id));
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const setExpenses = (expenses) => {
  return {
    type: 'SET_EXPENSES',
    expenses
  }
}

export const startSetExpenses = () => {
  return (disptach) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      disptach(setExpenses(expenses));
    });
  };
};
