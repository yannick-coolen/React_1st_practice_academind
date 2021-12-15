import ExpenseDate from './ExpenseDate';
import Card from './Card';

// Styling
import classes from './ExpenseItem.module.scss';

export default function ExpenseItem({ title, amount, date }) {
  return (
    <Card className={classes.expense_item}>
      <ExpenseDate date={date} />
      <div className={classes.expense_item__description}>
        <h2>{title}</h2>
        <div className={classes.expense_item__price}>&euro; {amount.toFixed(2)}</div>
      </div>
    </Card>
  );
}
