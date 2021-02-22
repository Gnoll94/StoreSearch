# Store Search

Store search is a web application to interact with a Walmart GraphQL API, displaying information about various stores around a specific zip code

### Tech
Node.js w/ Express

Javascript w/ React

### Installation

Store Search requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

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

Running unit tests
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
