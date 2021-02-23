import {useEffect, useState} from 'react';
import { ZipCodeInput, validateZipCode } from './ZipCodeInput';
import { RadiusInput, validateRadius } from './RadiusInput';
import {storeRequest} from './storeRequest'

export const App = () => {
  const [zipCode, setZipCode] = useState('');
  const [zipCodeErrorMessage, setZipCodeErrorMessage] = useState();

  const [radius, setRadius] = useState('50');
  const [radiusErrorMessage, setRadiusErrorMessage] = useState();

  const [storeResults, setStoreResults] = useState([]);

  const validateForm = () => {
      return validateRadius(radius, setRadiusErrorMessage) & 
        validateZipCode(zipCode, setZipCodeErrorMessage)
  };

  const onClick = async () => {
      if(validateForm()) {
      	const result = await storeRequest(zipCode, radius)
      	if(result && result.data && result.data.storesBySearchTerm) {
      		console.log(result.data.storesBySearchTerm.stores)
      	}
      }
  };

  const zipCodeProps = {
  	value: zipCode,
  	setValue: setZipCode,
  	inputErrorMessage: zipCodeErrorMessage  	
  }

  const radiusProps = {
  	value: radius,
  	setValue: setRadius,
  	inputErrorMessage: radiusErrorMessage
  }

  return (
    <div className='container'>
      <form role='form'>
	      <div className="form-group">
	      	<ZipCodeInput {...zipCodeProps} />
	  	  </div>
	      <div className="form-group">
	      	<RadiusInput {...radiusProps} />
	  	  </div>
            <div className="row">
                <div className="col-12 text-center p-3">
                    <button type="button" className="btn btn-primary" onClick={onClick} >Enter</button>
                </div>
            </div>	  	  
  	  </form>
    </div>
  );
}

export default App;
