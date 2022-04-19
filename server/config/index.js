const express = require("express");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const cors = require("cors");

// const session = require("express-session");
// const MongoStore = require("connect-mongo");
// const clientPromise = require('../db/index')
require("dotenv/config");

// Middleware configuration
module.exports = (app) => {

  app.set("trust proxy", 1);

  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );

  // app.use(
  //   session({
  //     secret: process.env.SESSION_SECRET,
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       httpOnly: true,
  //       maxAge: 10060000,
  //     },
  //     store: MongoStore.create({
  //       clientPromise: clientPromise,
  //       dbName: "prod",
  //       stringify: false,
  //       autoRemove: "interval",
  //       autoRemoveInterval: 1,
  //     }),
  //   })
  // );

  // In development environment the app logs
  app.use(logger("dev"));
  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
