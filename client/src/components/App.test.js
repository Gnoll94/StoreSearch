import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Zip Code/i);
  expect(linkElement).toBeInTheDocument();
});
