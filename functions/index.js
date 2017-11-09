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

db.on('error', function () {
    console.log('Connection error to MongoDB')
});

db.once('open', function () {
    console.log('MongoDB Connected');
});

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

app.get('/api', function(req, res) {
    res.send('api');
});

app.get('/api/projects', function(req, res) {
    
    res.send('api-projects');
});

app.use('/api-docs', function(req, res) {
    res.send('api-docs');
});


exports.app = functions.https.onRequest(app);