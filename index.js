/* Parte 1 */
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

const passport = require("passport");
const passportJWT = require("passport-jwt");

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

/* Parte 2 */
const users = [
   {
      id: 1,
      name: 'maria',
      password: 'maria123'
   },
   {
      id: 2,
      name: 'joao',
      password: 'joao123'
   }
];

/* Parte 3 */
const jwtOptions = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: 'minhaChaveSecreta'
}

/* Parte 4 */
const strategy = new JwtStrategy(jwtOptions, function(jwtPayload, next) {
    const user = users.find(user => user.id === jwtPayload.id)
    next(null, user ? user : false);
});

passport.use(strategy);

/* Parte 5 */
const app = express();
app.use(passport.initialize());
app.use(bodyParser.json())

/* Parte 6 */
app.post("/", function(req, res) {
    const name = req.body.name,
      password = req.body.password,
      user = users.find(user => user.name === name);

   if (user && (user.password === password) ){
      const payload = {id: user.id};
      const token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({message: "ok", token: token});
   } else {
      res.status(401).json({message:"erro de autenticacao"});
   }
});

/* Parte 7 */
app.get("/", passport.authenticate('jwt', { session: false }), function(req, res){
   res.json({message: "Sucesso! Voce acessou uma rota privada!"});
});

/* Parte 8 */
app.listen(80, function() {
   console.log("Express running");
});