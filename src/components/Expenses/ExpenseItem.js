import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


// props recive argument which is pass in app.js as a object
const ExpenseItem = (props) => {
    
    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <h2>{props.title}</h2>
            <div className='expense-item__description'>

                <div className='expense-item__price'>$ {props.amount}</div>
            </div>
        </div>
    );
}


export default ExpenseItem;