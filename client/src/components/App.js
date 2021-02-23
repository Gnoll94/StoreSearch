import {useEffect, useState} from 'react';
import { ZipCodeInput, validateZipCode } from './ZipCodeInput';
import { RadiusInput, validateRadius } from './RadiusInput';
import { SearchResults } from './SearchResults'
import { storeRequest } from './storeRequest'
import ClipLoader from "react-spinners/ClipLoader";
import logo from '../logo.png'

export const App = () => {
  const [zipCode, setZipCode] = useState('04005');
  const [zipCodeErrorMessage, setZipCodeErrorMessage] = useState();

  const [firstRender, setFirstRender] = useState(true);

  const [radius, setRadius] = useState('50');
  const [radiusErrorMessage, setRadiusErrorMessage] = useState();

  const [storeResults, setStoreResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  

  const validateForm = () => {
      return validateRadius(radius, setRadiusErrorMessage) & 
        validateZipCode(zipCode, setZipCodeErrorMessage)
  };

  const onClick = async () => {
      if(validateForm()) {
      	setStoreResults([])
      	setIsLoading(true)
      	setFirstRender(false)
      	const result = await storeRequest(zipCode, radius)
      	if(result && result.data && result.data.storesBySearchTerm) {
      		setStoreResults(result.data.storesBySearchTerm.stores)
      		console.log(result.data.storesBySearchTerm.stores)
      	}
      	setIsLoading(false)
      }
  };

  const searchResultProps = {
     stores: storeResults,
     isLoading,
     firstRender
  }  

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
  	  <img src={logo} className="img-fluid"/>
  	  <div className="text-center"> Search for a specific Zip Code & Radius and get nearby Walmart stores </div>
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
  	  {isLoading && 
  	  	<div className='d-flex justify-content-center'>
	  	  	<div className="spinner-border" role="status">
	  	  	</div>
  	  	</div>
  	  }
  	  {storeResults !== undefined && storeResults.length != 0 && 
  	  	<div className='col-12 text-center p-3'>{storeResults.length} stores found</div>
  	  }
  	  <SearchResults {...searchResultProps} />
    </div>
  );
}

export default App;
