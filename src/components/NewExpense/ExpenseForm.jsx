import React from 'react';

// Styling
import classes from './ExpenseForm.module.scss';

export default function ExpenseForm() {
  return (
    <form>
      <div className={classes.new_expense__controls}>
        <div className={classes.new_expense__control}>
          <label>Title</label>
          <input type='text' />
        </div>
        <div className={classes.new_expense__control}>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' />
        </div>
        <div className={classes.new_expense__control}>
          <label>Date</label>
          <input type='date' min='01-01-2019' max='31-12-2022' />
        </div>
      </div>
      <div className={classes.new_expense__actions}>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
