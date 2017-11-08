require('dotenv').config();

const MongoDB = require('mongodb');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');

var path = require('path');
var express = require('express');
var app = express();
var router = express.Router();
var server = require('http').createServer(app);
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
var db = mongoose.connection;

// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(cookieParser());

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/index.html')
});

app.get('/api', function (request, response) {
    response.json({ message: 'API Initialized!' });
});

app.get('/api-docs', function (request, response) {
    response.sendFile(__dirname + '/public/api-docs/index.html');
});

db.on('error', function () {
    console.log('Connection error to MongoDB')
});

db.once('open', function () {
    console.log('MongoDB Connected');
});

//server.listen(process.env.PORT, () => console.log('Server running on ' + process.env.PORT));

exports.app = functions.https.onRequest(app);