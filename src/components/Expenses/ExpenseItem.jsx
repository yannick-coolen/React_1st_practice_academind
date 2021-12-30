import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// Styling
import classes from './ExpenseItem.module.scss';

export default function ExpenseItem({ title, date, amount }) {
  return (
    <Card className={classes.expense_item}>
      <ExpenseDate date={date} />
      <div className={classes.expense_item__description}>
        <h2>{title}</h2>
        <div className={classes.expense_item__price}>
          &euro; {amount.toFixed(2)}
        </div>
      </div>
    </Card>
  );
}
