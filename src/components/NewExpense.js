import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, { useState } from 'react';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onSaveExpenseDataAdd(expenseData);
  };

  const [formShown, setFormShown] = useState(false);

  const openExpenseFormHandler = () => {
    setFormShown(true);
  };

  const cancelHandler = () => {
    setFormShown(false);
  };

  return (
    <div className="new-expense">
      {!formShown ? (
        <button onClick={openExpenseFormHandler}>Add new expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelForm={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
