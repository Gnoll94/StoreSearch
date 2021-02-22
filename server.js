const express = require('express')
const axios = require('axios');

const app = express();
const port = 4000;
const zipRouter = require('./routes/zip');

app.use('/stores', zipRouter);

var server = app.listen(port, () => {
  console.log(`Store Search listening at http://localhost:${port}`)
})

// From our important zip codes, cache them before we start the server
const importantZipCodes = ['97217', '72712', '04210', '02169', '32808']
console.log(`Beginning Important Store Caching...`)
importantZipCodes.forEach(function (zipCode) {
  axios.get(`http://localhost:${port}/stores/${zipCode}`)
  .then(response => {
    console.log(`Caching zip code ${zipCode}`)
  })
})

module.exports = server;