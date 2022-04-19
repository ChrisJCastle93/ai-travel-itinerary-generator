// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
require("dotenv").config();

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/travel-content";

const clientPromise = mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((m) => {
    console.log(`Connected to Mongo! Database name: "${m.connections[0].name}"`);
    return m.connection.getClient();
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

module.exports = clientPromise;