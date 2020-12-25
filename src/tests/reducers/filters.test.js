import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

it('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(defaultState);
});

it('should set sortBy to date', () => {
  const currentState = {
    ...defaultState,
    sortBy: 'amount',
  }
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toEqual('date');
});

it('should set sortBy to amount', () => {
  const currentState = {
    ...defaultState,
  }
  const state = filtersReducer(currentState, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toEqual('amount');
});

// set startDate filter
// set andDate filter
it('should set text filter', () => {
  const currentState = {
    ...defaultState,
  }
  const state = filtersReducer(
    currentState,
    {
      type: 'SET_TEXT_FILTER',
      text: 'test',
    },
  );
  expect(state.text).toEqual('test');
});

it('should set startDate filter', () => {
  const currentState = {
    ...defaultState,
  }

  const state = filtersReducer(
    currentState,
    {
      type: 'SET_START_DATE',
      startDate: moment(0),
    },
  );

  expect(state.startDate).toEqual(moment(0));
});

it('should set startDate filter', () => {
  const currentState = {
    ...defaultState,
  }

  const state = filtersReducer(
    currentState,
    {
      type: 'SET_END_DATE',
      endDate: moment(0),
    },
  );

  expect(state.endDate).toEqual(moment(0));
});
