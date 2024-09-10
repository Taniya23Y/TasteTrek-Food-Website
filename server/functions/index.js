/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccountKey = require("./serviceAccountKey.json");

// create an app
const express = require("express");
const app = express();

// body parser for our JSON data
app.use(express.json());

// cross origin
const cors = require("cors");
app.use(cors({ origin: true }));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// firebase credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

// api endpoints
app.get("/", (req, res) => {
  return res.send("hello World");
});

const userRoute = require("./routes/user");
app.use("/api/users", userRoute);

// creating product route
const productRoute = require("./routes/products");
app.use("/api/products/", productRoute);

// export this app
exports.app = functions.https.onRequest(app);
