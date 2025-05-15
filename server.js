// server.js

const express = require('express');
const dotenv = require('dotenv');
const { connectToDb } = require('./db/connect'); // <- connect to MongoDB

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Import and use contacts route
const contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute); // <- enables /contacts route

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Connect to DB, then start server
connectToDb(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
