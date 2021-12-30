import React, { Fragment } from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

export default function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7 , 14) },
    { id: 'e2', title: 'TV', amount: 799.87, date: new Date(2021, 3, 20) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2020, 9, 25) },
    { id: 'e4', title: 'Desk', amount: 450.5, date: new Date(2019, 5, 7) }
  ];

  const addExpanseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <Fragment>
      <NewExpense onAddExpense={addExpanseHandler} />
      <ExpenseList expenses={expenses} />
    </Fragment>
  );
}
