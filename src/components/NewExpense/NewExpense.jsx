import React from 'react';
import { v4 as uuid } from 'uuid';

import ExpenseForm from './ExpenseForm';

// Styling
import classes from './NewExpense.module.scss';

export default function NewExpense({ onAddExpense }) {
  const saveExpanseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid()
    };
    onAddExpense(expenseData);
  };

  return (
    <div className={classes.new_expense}>
      <ExpenseForm onSaveExpanseData={saveExpanseDataHandler} />
    </div>
  );
}
