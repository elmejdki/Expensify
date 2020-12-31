import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
  state = {
    description: this.props.description || '',
    note: this.props.note || '',
    amount: this.props.amount ? this.props.amount / 100 + '' : '',
    createdAt: this.props.createdAt ? moment(this.props.createdAt) : moment(),
    calendarFocused: false,
    state: ''
  }

  onDescriptionChange = (event) => {
    this.setState(() => ({
      description: event.target.value
    }));
  }

  onNoteChange = (event) => {
    this.setState(() => ({
      note: event.target.value
    }))
  }

  onAmountChange = (event) => {
    const amount = event.target.value;
    if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // set error state equal to 'Please provide description and amount'
      this.setState(() => ({
        error: 'Please provide description and amount'
      }));
    }else {
      this.setState(() => ({
        error: ''
      }));
      const { description, note, amount, createdAt } = this.state;
      this.props.onSubmit({
        description,
        note,
        createdAt: createdAt.valueOf(),
        amount: parseInt(Number(amount)*100)  
      });
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        { this.state.error && <p className="form__error">{this.state.error}</p>}
        <input 
          type="text"
          className="text-input"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          value={this.state.note}
          className="textarea"
          onChange={this.onNoteChange}
          placeholder="Add a note for your expense (optional)"
        >
        </textarea>
        <div>
          <button className="button">
            {
              this.props.isEdit ? 'Edit Expense' : 'Add Expense'
            }
          </button>
        </div>
      </form>
    );
  }
}
