import { render, screen } from '@testing-library/react';
import { SearchResults } from '../SearchResults';

test('SearchResults should display properly', () => {
	const props = {
		stores: [
		   {
			  distance: '22',
			  displayName: 'Fake Store',
			  address: {address: '123 Test Roadqq'},
			  phone: '555-555-5555'
		   },
		   {
			  distance: '44',
			  displayName: 'Fake Store 2',
			  address: {address: '5 Western Avenue'},
			  phone: '555-555-5777'
		   }		   
		],
		isLoading: false,
		firstRender: false
	}
    render(<SearchResults {...props} />);
    const header = screen.getByText('Distance in Miles');    
    const firstResult = screen.getByText('Fake Store');
    const secondResult = screen.getByText('5 Western Avenue');	

    expect(header).toBeInTheDocument();
    expect(firstResult).toBeInTheDocument();
    expect(secondResult).toBeInTheDocument();
});