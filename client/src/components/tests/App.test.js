import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {storeRequest} from '../storeRequest'
jest.mock('../storeRequest')

import App from '../App';

test('Renders the form', () => {
  render(<App />);
  const zipCodeElement = screen.getByText('Zip Code');
  const radiusElement = screen.getByText('Radius');
  
  expect(zipCodeElement).toBeInTheDocument();
  expect(radiusElement).toBeInTheDocument();  
});

test('Should handle inputs properly', () => {
  const {getByLabelText} = render(<App />);

  // Zip Code Handling
  const zipInput = getByLabelText('Zip Code')
  fireEvent.change(zipInput, { target: { value: '12345' } })  
  expect(zipInput.value).toBe('12345')

  fireEvent.change(zipInput, { target: { value: '' } })  
  expect(zipInput.value).toBe('')

  // Radius Handling
  const radiusInput = getByLabelText('Radius')  
  fireEvent.change(radiusInput, { target: { value: '67' } })  
  expect(radiusInput.value).toBe('67')

  fireEvent.change(radiusInput, { target: { value: '' } })  
  expect(radiusInput.value).toBe('')
});

test('Should handle a search with no results', async () => {
  const data = {
    data: {
	      storesBySearchTerm: {
	      	stores: [
		        {
              address: {address:'test_street', city:'city', state:'AK'},
		          distance: '25',
		          displayName: 'test_store',
		        },
		        {
              address: {address:'yonder-way', city:'city', state:'CA'},          
		          distance: '34',
		          displayName: 'farther_store',
		        },
	        ]
  	    },
    },
  };
  storeRequest.mockImplementationOnce(() => Promise.resolve(data));
  const {getByLabelText, getByRole} = render(<App />);

  // Zip Code Handling
  const zipInput = getByLabelText('Zip Code')
  fireEvent.change(zipInput, { target: { value: '04005' } })  

  const radiusInput = getByLabelText('Radius')  
  fireEvent.change(radiusInput, { target: { value: '50' } })

  const submitButton = getByRole('button')
  fireEvent.click(submitButton)

  await waitFor(() => expect(screen.getByText('25')).toBeInTheDocument())
  await waitFor(() => expect(screen.getByText('34')).toBeInTheDocument())
});