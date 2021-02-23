# Store Search

Store search is a web application to interact with a Walmart GraphQL API, displaying information about various stores around a specific zip code

### Tech
Node.js w/ Express
- Unit Testing done with Mocha

Javascript w/ React
- Unit Testing done with React Testing Library & Jest

### React Front End 
![Front End View](https://raw.githubusercontent.com/Gnoll94/StoreSearch/master/WalmartOverview.PNG)

### 100% Code Coverage on the React front-end w/ no linting warnings/errors
![100% Coverage](https://raw.githubusercontent.com/Gnoll94/StoreSearch/master/coverage.PNG)

### Installation

Store Search requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

This repo houses the node JS server, as well as the react front-end(under /client)

You'll need two separate CMD windows to run both at the same time

Running the Server
```sh
$ cd StoreSearch
$ npm install -d
$ npm start
```

Running the React App
```sh
$ cd StoreSearch/client
$ npm install
$ npm start
```

Running Node.JS unit tests (using mocha)
```
$ cd StoreSearch
$ npm run test
```

Running React unit tests (using Jest)
```
$ cd StoreSearch/client
$ npm run test
```

### Overview of Endpoints
## Zip Code Search
Returns data about stores that are close to the specified zip code
* **URL**
/stores/:zip/:radius?

* **Method:**
POST

*  **URL Params**

**Required:**
```zip=[String]```

**Optional:**
```radius=[integer]```
