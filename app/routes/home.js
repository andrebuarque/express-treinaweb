const auth = require('../../config/auth').auth();

module.exports = (app) => {
    const home = app.controllers.home;

    app.get('/home', home.index);
    app.get('/home/add', auth.authenticate(), home.addItem);
    app.post('/home/login', home.login);
};