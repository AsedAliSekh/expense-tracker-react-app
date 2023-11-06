import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterDate, setEnterDate] = useState('');
    const [enterAmount, setEnterAmount] = useState('');

    const titleChangeHendler = (event) => {
        setEnterTitle(event.target.value);
    }
    const dateChangeHendler = (event) => {
        setEnterDate(event.target.value);
    }
    const amountChangeHendler = (event) => {
        setEnterAmount(event.target.value);
    }

    const submitHendler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };
        props.addNewExpense(expenseData);
        // console.log(expenseData);
        setEnterAmount('');
        setEnterTitle('');
        setEnterDate('');
    }

    return(
        <form onSubmit={ submitHendler }>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Titel</label>
                    <input type='text' value={enterTitle} onChange={ titleChangeHendler }/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enterAmount} onChange={ amountChangeHendler }/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enterDate} onChange={ dateChangeHendler }/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;