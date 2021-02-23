import axios from 'axios'

const API_URL = 'http://localhost:4000/stores'

export const storeRequest = (zipCode, radius) => {
	return axios.get(`${API_URL}/${zipCode}/${radius}`)
	  .then(function (response) {
	  	console.log(response)
	    return response.data;
	  })
	  .catch(function (error) {
	    console.log(error);
	  })
}