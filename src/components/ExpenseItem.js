// import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  const deleteHandler = () => {
    props.onDelete(props.title);
  };

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£ {props.amount}</div>
      </div>
      <button className="delete-expense__actions" onClick={deleteHandler}>
        X
      </button>
    </div>
  );
};

export default ExpenseItem;
