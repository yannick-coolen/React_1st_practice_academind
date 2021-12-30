import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

// Styling
import classes from './ExpenseList.module.scss'
import ExpensesFilter from './ExpensesFilter';

export default function ExpenseList({ expenses }) {
  const [filterdYear, setFilteredYear] = useState('2020');

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  
  return (
    <Card className={classes.expenses}>
      <ExpensesFilter selectedYear={filterdYear} onChangeFilter={filteredChangeHandler}/>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}
