const mongoose = require('mongoose');

module.exports = (url) => {
    mongoose.connect(url, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => console.log(`mongoose conectado em: ${url}`));
    mongoose.connection.on('disconnected', () => console.log('mongoose desconectado'));
    mongoose.connection.on('error', (err) => console.log(`mongoose error: ${err}`));
};