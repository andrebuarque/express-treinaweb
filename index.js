const mongoose = require('mongoose');

const options = { useNewUrlParser: true };
mongoose.connect('mongodb://user:password@mongo:27017/treinaweb?authSource=admin', options);
const db = mongoose.connection;
db.on('error', (err) => console.log('erro de conexão.', err));

const cursoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    categoria: {
        type: String
    }
});

const Curso = mongoose.model('Curso', cursoSchema);

// const novoCurso = new Curso({
//     nome: 'teste',
//     categoria: 'teste-categoria'
// });

// novoCurso.save((err, res) => console.log(err, res));

Curso.find({}, [], { sort: { nome: 1 } }, (err, res) => {
    console.log(res);
});