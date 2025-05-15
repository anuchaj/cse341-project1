// db/connect.js

const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let db;

const connectToDb = async (callback) => {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    db = client.db(); // use the default db from the URI
    callback(); // start server after DB connects
  } catch (err) {
    console.error(err);
  }
};

console.log("DB connected");


const getDb = () => db;

module.exports = { connectToDb, getDb };
