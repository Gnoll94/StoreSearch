import { render, screen } from '@testing-library/react';
import { validateZipCode } from '../ZipCodeInput';

test('validateZipCode validation should return false / true appropriately', () => {
	const setMessageFunction = (string) => {return undefined};
	expect(validateZipCode('asble', setMessageFunction) === false);
	expect(validateZipCode('-1', setMessageFunction) === false);
	expect(validateZipCode('0444', setMessageFunction) === false);
	expect(validateZipCode(undefined, setMessageFunction) === false);
	expect(validateZipCode('12345', setMessageFunction) === true);
	expect(validateZipCode('04005', setMessageFunction) === true);	
});