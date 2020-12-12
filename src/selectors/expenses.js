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
          typeof startDate !== 'number' || expense.createdAt >= startDate
        ) && (
          typeof endDate !== 'number' || expense.createdAt <= endDate
        )
      )
  }).sort((expense_a, expense_b) => 
    sortBy === 'amount' ?
      expense_b.amount - expense_a.amount :
      expense_b.createdAt - expense_a.createdAt
  );
}

export default getVisibleExpenses;