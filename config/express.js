const express = require('express'),
    bodyParser = require('body-parser'),
    load = require('express-load');

// constants
const PORT = 80;
const STATIC_FILES = './public';

const app = express();

// env. variables
app.set('port', PORT);
app.set('view engine', 'ejs');
app.set('views', './app/views');

// middlewares
app.use(express.static(STATIC_FILES));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// load app modules
load('models', { cwd: 'app' })
    .then('controllers')
    .then('views')
    .then('routes')
    .into(app);

module.exports = app;