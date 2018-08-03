const mongoose = require('mongoose');

module.exports = () => {
    const schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });

    return mongoose.model('User', schema, 'users');
};