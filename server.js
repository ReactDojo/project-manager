require('dotenv').config();

const MongoDB = require('mongodb');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');
const APIRoutes = require("./routes/api")

var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
var db = mongoose.connection;

app.use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cookieParser());

app.use("/api/*", APIRoutes);

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index.html')
});

db.on('error', function () {
  console.log('Connection error to MongoDB')
});

db.once('open', function () {
  console.log('MongoDB Connected 123');
});

exports.app = functions.https.onRequest(app);