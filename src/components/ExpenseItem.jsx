import { Fragment } from 'react';
import classes from './ExpenseItem.module.scss';
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem({ title, amount, date }) {
  return (
    <Fragment>
      <div className={classes.expense_item}>
        <ExpenseDate date={date} />
        <div className={classes.expense_item__description}>
          <h2>{title}</h2>
          <div className={classes.expense_item__price}>&euro; {amount}</div>
        </div>
      </div>
    </Fragment>
  );
}
