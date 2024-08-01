// const mongoose = require('mongoose');

// const DB_URL = process.env.mon

// mongoose.connect(DB_URL)
//     .then(() => {
//         console.log('MongoDB is Connected...');
//     }).catch((err) => {
//         console.log('MongoDB Conn Error...', err);
//     })

const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.MONGODB_URI;


mongoose.connect(dbURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
