import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import React, { useState } from 'react';

const dummyExpenseData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenseData);

  const newDataHandler = (expenseData) => {
    setExpenses((prevState) => {
      return [...prevState, expenseData];
    });
  };

  const deleteDataHandler = (expenseTitle) => {
    setExpenses((prevState) => {
      return prevState.filter((x) => x.title !== expenseTitle);
    });
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onSaveExpenseDataAdd={newDataHandler} />
      <Expenses expenses={expenses} onDelete={deleteDataHandler} />
    </div>
  );
}

export default App;
