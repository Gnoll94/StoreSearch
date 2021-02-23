import Input from './Input'

const zipRegex = new RegExp('^[0-9]{5}$')

export const validateZipCode = (value, setErrorMessage) => {
    if(!value) {
        setErrorMessage('Zip Code is a required field');
        return false;
    }	
    if(!zipRegex.test(value)) {
        setErrorMessage('Zip Code needs to be a number formatted like 12345');
        return false;
    }
    setErrorMessage(undefined);
    return true;
};

export const ZipCodeInput = (props) => {
    const {value, setValue, inputErrorMessage} = props;
    const radiusProps = {
        id:"zipCode",
        placeholder:"Enter zip code",
        type:"string",
        value,
        title: "Zip Code",
        inputerrormessage: inputErrorMessage,
        maxLength: 5,
        onChange: e => setValue(e.target.value)
    };	
  return ( 
  	<Input {...radiusProps} />
  );
}
