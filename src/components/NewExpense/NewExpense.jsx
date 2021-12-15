import React from 'react'

import ExpenseForm from './ExpenseForm'

// Styling
import classes from './NewExpense.module.scss'

export default function NewExpense() {
    return (
        <div className={classes.new_expense}>
            <ExpenseForm />
        </div>
    )
}
