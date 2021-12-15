import React from 'react'

// Styling
import classes from './Card.module.scss';

export default function Card({ children, className }) {
  const classValue = 'card ' + className;
  return <div className={`${classes.Card} ${classValue}`}>{children}</div>;
}
