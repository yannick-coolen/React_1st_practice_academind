import React, { useState } from 'react';

// Styling
import classes from './ExpenseForm.module.scss';

export default function ExpenseForm({onSaveExpanseData}) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput((prev) => {
    //   return {
    //     ...prev, enteredTitle: e.target.value
    //   }
    // })
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput((prev) => {
    //   return {
    //     ...prev, enteredAmount: e.target.value
    //   }
    // })
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput((prev) => {
    //   return {
    //     ...prev, enteredDate: e.target.value
    //   }
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    onSaveExpanseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.new_expense__controls}>
        <div className={classes.new_expense__control}>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.new_expense__control}>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes.new_expense__control}>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            min='01-01-2019'
            max='31-12-2022'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={classes.new_expense__actions}>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
