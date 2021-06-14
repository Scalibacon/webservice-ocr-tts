const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const multiparty = require('connect-multiparty');

const app = express();

app.use(cors());
app.use(express.json());
app.use(multiparty());
app.use(routes);

module.exports = app;