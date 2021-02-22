const express = require('express')
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const fetch = require('node-fetch')
const port = 3000
const API_URL = 'https://developer.api.stg.walmart.com/api-proxy/service/Store-Services/Store-GraphQL-API/v1/graphql'

const app = express()
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
       }
       displayName
     }
   }
  }`
)

app.get('/stores/:zip/:radius?', (req, res) => {
  const radius = (req.params.radius && !isNaN(parseInt(req.params.radius))) ? parseInt(req.params.radius) : 50
  if(!zipCodeIsValid(req.params.zip)) {
    res.sendStatus(404)
  } else {
    fetch(API_URL, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({
         query: buildZipCodeQuery(req.params.zip, radius)
       })
     })
     .then(result => {
       return result.json();
     })
     .then(data => {
       res.send(data);
     })
     .catch(error => {
       console.error('Error:', error);
     });     
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})