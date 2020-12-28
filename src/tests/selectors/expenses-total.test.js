import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

it('should return the total sum of amounts in the list', () => {
  const total = getExpensesTotal(expenses);
  expect(total).toBe(114195);
});

it('should return the correct sum of one expense', () => {
  const total = getExpensesTotal([expenses[0]]);
  expect(total).toBe(195);
});

it('should return 0 if an empty array was passed to it', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});
