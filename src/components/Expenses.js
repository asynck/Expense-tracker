import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  const yearChangeHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log('from Expenses');
    console.log(year);
  };

  const filteredArr = props.expenses.filter(
    (x) => x.date.getFullYear().toString() === year
  );

  const onDeleteHandler = (expenseTitle) => {
    props.onDelete(expenseTitle);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        onSelectYearData={yearChangeHandler}
        selectedYear={year}
      />
      {filteredArr.length === 0 ? (
        <p className="expenses-list__fallback">No expenses found!</p>
      ) : (
        filteredArr.map((x) => (
          <ExpenseItem
            key={x.id}
            title={x.title}
            amount={x.amount}
            date={x.date}
            onDelete={onDeleteHandler}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
