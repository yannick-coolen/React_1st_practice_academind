import React, { Fragment } from 'react';

// Styling
import classes from './ExpenseDate.module.scss';

export default function ExpenseDate({ date }) {
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return (
    <Fragment>
      <div className={classes.expense_date}>
        <div className={classes.expense_date__day}>{day}</div>
        <div className={classes.expense_date__month}>{month}</div>
        <div className={classes.expense_date__year}>{year}</div>
      </div>
    </Fragment>
  );
}
