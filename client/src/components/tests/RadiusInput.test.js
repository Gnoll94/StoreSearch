import { render, screen } from '@testing-library/react';
import { validateRadius } from '../RadiusInput';

test('RadiusInput validation should return false / true appropriately', () => {
	const setMessageFunction = (string) => {return undefined};
	expect(validateRadius('-1', setMessageFunction) === false);
	expect(validateRadius('101', setMessageFunction) === false);
	expect(validateRadius(undefined, setMessageFunction) === false);
	expect(validateRadius('blah', setMessageFunction) === false);
	expect(validateRadius('1', setMessageFunction) === true);
	expect(validateRadius('100', setMessageFunction) === true);	
});