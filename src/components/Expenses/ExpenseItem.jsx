import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// Styling
import classes from './ExpenseItem.module.scss';

export default function ExpenseItem(props) {
  const date = props.date;
  const amount = props.amount;
  const [title, setTitleValue] = useState(props.title);

  const clickHandler = () => {
    setTitleValue('Updated!');
    console.log(title);
  };

  return (
    <Card className={classes.expense_item}>
      <ExpenseDate date={date} />
      <div className={classes.expense_item__description}>
        <h2>{title}</h2>
        <div className={classes.expense_item__price}>
          &euro; {amount.toFixed(2)}
        </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
