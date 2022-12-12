import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpenseForm from './ExpenseForm';
import NewExpense from './NewExpense';

test('renders add new expense button', () => {
  //Arrange
  render(<NewExpense />);

  //Act
  //nothing for this test

  //Assert
  const outputElement = screen.getByText(/add new expense/i);
  expect(outputElement).toBeInTheDocument();
});

test('renders ExpenseForm component if the button was clicked', () => {
  //Arrange
  render(<NewExpense />);

  //Act
  const buttonElement = screen.getByRole('button');
  userEvent.click(buttonElement);

  //Assert
  //QUESTION - where should state changes that are passed from child components be tested - ANSWER : At the child, test whether the prop callback has been called
  const outputElement = screen.getByText(/title/i);
  expect(outputElement).toBeInTheDocument();
});

test('does not show add new expense button when the button was clicked', () => {
  //Arrange
  render(<NewExpense />);

  //Act
  const buttonElement = screen.getByRole('button');
  userEvent.click(buttonElement);

  //Assert
  const outputElement = screen.queryByText(/add new expense/i);
  expect(outputElement).not.toBeInTheDocument();
});
