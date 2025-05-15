// db/connect.js

const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let db;

const connectToDb = async (callback) => {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    db = client.db(process.env.DB_NAME); // Use DB name from env or use this db = client.db() the default db from the URI
    console.log('Connected to MongoDB');
    callback(); // start server after DB connects
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
};

const getDb = () => db;

module.exports = { connectToDb, getDb };
