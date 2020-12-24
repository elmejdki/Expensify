import moment from 'moment';

const getVisibleExpenses = (expenses, { text, startDate, endDate,sortBy }) => {
  return expenses.filter(
    (expense) => {
      let {description, note} = expense;
      description = description.toLowerCase();
      note = note.toLowerCase();
      text = text.toLowerCase();

      const createdAtMoment = moment(expense.createdAt);

      const textMatch = description.includes(text) || note.includes(text);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

      return textMatch && startDateMatch && endDateMatch;
  }).sort((expense_a, expense_b) => 
    sortBy === 'amount' ?
      expense_b.amount - expense_a.amount :
      expense_b.createdAt - expense_a.createdAt
  );
}

export default getVisibleExpenses;