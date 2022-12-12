import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //Arrange
  render(<App />);

  //Act
  //nothing for this test

  //Assert
  const linkElement = screen.getByText(/toilet paper/i);
  expect(linkElement).toBeInTheDocument();
});
