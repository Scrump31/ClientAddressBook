const { mongodb } = require('./keys');

const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/ClientAddressBook';
} else if (env === 'test') {
  process.env.PORT = 3001;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TestClientAddressBook';
} else {
  process.env.MONGODB_URI = mongodb.dbURI;
}
