import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// the type of actions that we need to create:

// For the expenses reducer
// ADD_EXPENSE
const addExpense = (
    {
      description = "",
      note = '',
      amount = 0,
      createdAt = 0
    } = {}
  ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// For the filters reducer:
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate = null) => ({
  type: 'SET_END_DATE',
  endDate
});


const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
}

const expensesReducer = (state = expensesReducerDefaultState,
  action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id );
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        }else {
          return expense;
        }
      });
    default:
      return state;
  };
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  };
}

const getVisibleExpenses = (expenses, { text, startDate, endDate,sortBy }) => {
  return expenses.filter(
    (expense) => {
      let {description, note} = expense;
      description = description.toLowerCase();
      note = note.toLowerCase();
      text = text.toLowerCase();

      return (
        description.includes(text) || note.includes(text)
      ) && (
        (
          expense.createdAt >= startDate
        ) && (
          expense.createdAt <= endDate
        )
      )
  }).sort((expense_a, expense_b) => 
    sortBy === 'amount' ?
      expense_b.amount - expense_a.amount :
      expense_b.createdAt - expense_a.createdAt
  );
}

// Store Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const { expenses, filters } = store.getState();
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 20 }));
const expenseThree = store.dispatch(addExpense({ description: 'Something', amount: 300 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(
  expenseTwo.expense.id,
  {
    description: 'Keto Diet',
    amount: 400
  }
));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
store.dispatch(sortByDate());
store.dispatch(sortByAmount());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));


const demoState = {
  expenses: [{
    id: 'öknfwkenlksgfg',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // amount or date
    startDate: null,
    endDate: null
  }
};
