const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
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
app.use(cookieParser());
app.use(expressSession({ secret: 'meuTokenSecreto' }));

// load app modules
load('models', { cwd: 'app' })
    .then('controllers')
    .then('views')
    .then('routes')
    .into(app);

module.exports = app;