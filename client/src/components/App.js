import {useEffect, useState} from 'react';
import { ZipCodeInput } from './ZipCodeInput';
import { RadiusInput } from './RadiusInput';

function App() {
  return (
    <div className='container'>
      <form role='form'>
	      <div className="form-group">
	      	<label>Zip Code</label>
	      	<ZipCodeInput/>
	  	  </div>
	      <div className="form-group">
	      	<label>Radius</label>
	      	<RadiusInput/>
	  	  </div>
  	  </form>
    </div>
  );
}

export default App;
