const app = require('./config/express');
const database = require('./config/database');

database('mongodb://user:password@mongo:27017/treinaweb?authSource=admin');

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});