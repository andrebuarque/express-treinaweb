const express = require('express');

const PORT = 80;
const STATIC_FILES = './public';

const app = express();
app.set('port', PORT);
app.use(express.static(STATIC_FILES));

module.exports = app;