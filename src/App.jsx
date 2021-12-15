import React, { Fragment } from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

export default function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date() },
    { id: 'e2', title: 'TV', amount:  799.87, date: new Date() },
    { id: 'e3', title: 'Car Insurance', amount:  294.67, date: new Date() },
    { id: 'e4', title: 'Desk', amount:  450.50, date: new Date() }
  ];

  return (
    <Fragment>
      <NewExpense />
      <ExpenseList expenses={expenses} />
    </Fragment>
  );
}
