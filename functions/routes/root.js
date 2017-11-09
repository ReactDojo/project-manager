"use strict";

const express = require('express');
const Router = express.Router();

module.exports = function () {

  Router.get("/", function (req, res) {
    res.sendFile(__dirname + '../build/index.html');
  });

  return Router;
}
