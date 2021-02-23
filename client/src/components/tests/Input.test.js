import { render, screen } from '@testing-library/react';
import Input from '../Input';

test('Input should render the title', () => {
  render(<Input title={'Test'} inputerrormessage={undefined}/>);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test('Input should render the error message if provided', () => {
  render(<Input title={'Test'} inputerrormessage={'error!'}/>);
  const linkElement = screen.getByText(/error!/i);
  expect(linkElement).toBeInTheDocument();
});
