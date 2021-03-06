const express = require('express');
const NodeCache = require('node-cache');

const fetch = require('node-fetch')
const storeCache = new NodeCache();
const API_URL = 'https://developer.api.stg.walmart.com/api-proxy/service/Store-Services/Store-GraphQL-API/v1/graphql'
const router = express.Router();

const zipRegex = new RegExp('^[0-9]{5}$')

// Currently only checking against this regex
// If we wanted to expand out to do more intricate param checking, we can expand this function
const zipCodeIsValid = (zipCode) => {
  return zipRegex.test(zipCode)
}

const buildZipCodeQuery = (zip='00000', radius=50) => (
  `{
   storesBySearchTerm(
     searchTerm: "`+zip+`"
     searchOptions: {radius: `+radius+`}
   ) {
     stores {
       distance
       address {
         address
         city
         state
       }
       phone
       displayName
     }
   }
  }`
)

router.get('/:zip/:radius?', (req, res) => {
  const radius = (req.params.radius && !isNaN(parseInt(req.params.radius))) ? parseInt(req.params.radius) : 50
  if(!zipCodeIsValid(req.params.zip)) {
    res.sendStatus(404)
  } else {
    const cacheCheck = storeCache.get(req.params.zip + ':' + radius) 
    if (cacheCheck) {
      res.send(cacheCheck)
    } else {
      fetch(API_URL, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*"
         },
         body: JSON.stringify({
           query: buildZipCodeQuery(req.params.zip, radius)
         })
       })
       .then(result => {
         return result.json();
       })
       .then(data => {
         storeCache.set(req.params.zip + ':' + radius, data, 10000);
         res.send(data);
       })
       .catch(error => {
         console.error('Error:', error);
       });   
    }}
});

module.exports = router