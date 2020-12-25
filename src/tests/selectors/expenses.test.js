import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null,
};

it('should filter by text value', () => {
  const filters = {
    ...defaultFilters,
    text: 'e',
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([
    expenses[2],
    expenses[1],
  ]);
});

it('should filter by startDate', () => {
  const filters = {
    ...defaultFilters,
    startDate: moment(0),
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([
    expenses[2],
    expenses[0],
  ]);
});

it('should filter by endDate', () => {
  const filters = {
    ...defaultFilters,
    endDate: moment(0),
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([
    expenses[0],
    expenses[1],
  ]);
});

it('should sort by amount', () => {
  const filters = {
    ...defaultFilters,
    sortBy: 'amount',
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([
    expenses[1],
    expenses[2],
    expenses[0],
  ]);
});

it('should sort by date', () => {
  const filters = {
    ...defaultFilters,
  }
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([
    expenses[2],
    expenses[0],
    expenses[1],
  ]);
});
