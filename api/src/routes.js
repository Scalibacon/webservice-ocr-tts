const express = require('express');
const RecognizerController = require('./controller/RecognizerController');

const routes = express.Router();

routes.post('/recognize', RecognizerController.recognizeFile);

module.exports = routes;