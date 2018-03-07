# Client Address Book Manager
A address book to manage contacts


This project is a full-stack Node app that allows users to create and store a list of clients. Currently, users can create an account using a valid Google email account.   

## Setup and Installation

### Prerequisites
  * Install `Node.js`
  * Follow instructions to obtain OAuth 2.0 client credentials for your copy of this project using the [Google API Console](https://console.developers.google.com/)

### Step-by-Step

  1. Open a terminal, navigate to your selected root for the project
  2. Clone the repository: `git clone https://github.com/Scrump31/ClientAddressBook.git` 
  3. Change directory: `cd ClientAddressBook`
  4. Type: `npm install`
  5. Create a **config.json** file modeled after the following with your unique data for each value: **(keep this file secure!!!)**
  ```
  {
    "development": {
      "PORT": <your port number>,
      "MONGODB_URI": "<database name here>",
        "clientID": "<OAuth 2.0 client credentials>",
        "clientSecret": "<OAuth 2.0 client credentials>",
        "cookieKey": "<your unique key here>"
    },
    "test": {
      "PORT": <your port number>,
      "MONGODB_URI": "<testing database name here>",
        "clientID": "<get from Google>",
        "clientSecret": "<get from Google>",
        "cookieKey": "<your unique key here>"
    }
  }
  ```
  5. Type: `npm start` to run the application.

  ### Running Tests
  Type: `npm run test` to run tests. 


### Technologies used:
* [Express](https://github.com/expressjs/express)
* [Mongoose](https://github.com/Automattic/mongoose)
* [Lodash](https://lodash.com/)
* [EJS](https://github.com/mde/ejs)
* [passport-google-oauth20](https://github.com/jaredhanson/passport-google-oauth2)

