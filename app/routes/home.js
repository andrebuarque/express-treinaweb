module.exports = (app) => {
    const home = app.controllers.home;

    app.get('/home', home.index);
    app.get('/home/add', home.addItem);
};