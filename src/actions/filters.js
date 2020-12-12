export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

export const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = (endDate = null) => ({
  type: 'SET_END_DATE',
  endDate
});
