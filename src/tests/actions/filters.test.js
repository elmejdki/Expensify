import moment from 'moment';
import {
  setTextFilter,
  setEndDate,
  setStartDate,
  sortByAmount,
  sortByDate,
} from '../../actions/filters';

it('should setup setTextFilter action object with provided value', () => {
  const action = setTextFilter('filter text');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'filter text',
  });
});

it('should setup setTextFilter action object with default value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

it('should setup setEndDate action object with provided value', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

it('should setup setEndDate action object with provided value', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

it('should setup sortByDate action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

it('should setup sortByAmount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});
