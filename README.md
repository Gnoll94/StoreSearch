# Store Search

Store search is a web application to interact with a Walmart GraphQL API, displaying information about various stores around a specific zip code

### Tech
Node.js w/ Express

Javascript w/ React

### 100% Code Coverage on the React front-end
![100% Coverage Screenshot](coverage.png)

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
