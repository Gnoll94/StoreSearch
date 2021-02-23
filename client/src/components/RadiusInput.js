import Input from './Input'

const radiusRegex = RegExp('^[1-9][0-9]?$|^100$');

export const validateRadius = (value, setErrorMessage) => {
    if(!radiusRegex.test(value)) {
        setErrorMessage('Radius needs to be an integer value between 0 and 99');
        return false;
    }
    setErrorMessage(undefined);
    return true;
};

export const RadiusInput = (props) => {
    const {value, setValue, inputErrorMessage} = props;
    const radiusProps = {
        id:"radius",
        placeholder:"Enter Radius in miles (1-100)",
        type:"string",
        value,
        title: "Radius",
        inputerrormessage: inputErrorMessage,
        maxLength: 3,
        onChange: e => setValue(e.target.value)
    };	
  return ( 
  	<Input {...radiusProps} />
  );
}
