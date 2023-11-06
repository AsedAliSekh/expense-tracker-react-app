import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const expenseDataHendelar = (reciveExpenseData) => {
        const newExpense = {
            ...reciveExpenseData,
            id: Math.random().toString()
        }
        props.addNewExpenseInApp(newExpense);
    };
    return(
        <div className='new-expense'>
            <ExpenseForm addNewExpense={expenseDataHendelar}/>
        </div>
    );
}

export default NewExpense;