import { Fragment } from 'react';
import ExpenseList from './components/ExpenseList';

export default function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount:  294.67, date: new Date() },
    { id: 'e2', title: 'Car Insurance', amount:  294.87, date: new Date() },
    { id: 'e3', title: 'Car Insurance', amount:  294.67, date: new Date() },
    { id: 'e4', title: 'Car Insurance', amount:  294.67, date: new Date() }
  ];

  return (
    <Fragment>
      <h2>Let's get started!</h2>
      <ExpenseList expenses={expenses} />
    </Fragment>
  );
}