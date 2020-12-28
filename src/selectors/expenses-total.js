const getExpensesTotal = (expenses) => {
  return expenses.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  )
};

export default getExpensesTotal;