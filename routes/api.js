"use strict";

const express = require('express');
const APIRoutes = express.Router();

module.exports = function () {

  APIRoutes.get("/projects/", function (req, res) {
    console.log('projeeees');
    return response.json({ message: 'GET /projects' });
  });

  APIRoutes.get("/", function (req, res) {
    console.log('rooot');
    return response.json({ message: 'API Initialized!123' });
  });

  return APIRoutes;
}
