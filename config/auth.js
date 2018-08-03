const passport = require('passport'),
    jwt = require('jsonwebtoken')
    passportJWT = require('passport-jwt'),
    mongoose = require('mongoose');

var ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'minha_chave_secreta'
};

module.exports = {
    auth() {
        const User = mongoose.models.User;
        const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
            User.findById(jwtPayload._id).exec().then((user) => {
                next(null, user ? user : false);
            });
        });

        passport.use(strategy);

        return {
            initialize: () => passport.initialize(),
            authenticate: () => passport.authenticate('jwt', { session: false })
        };
    },
    login(name, password, callback) {
        const User = mongoose.models.User;

        User.findOne({ name, password }).exec().then((user) => {
            if (user) {
                const payload = { _id: user._id };
                const token = jwt.sign(payload, jwtOptions.secretOrKey);
                callback({ message: 'ok', token });
            } else {
                callback(false);
            }
        });
    }
};