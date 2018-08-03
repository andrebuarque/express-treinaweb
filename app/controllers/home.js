const login = require('../../config/auth').login;

class Home {
    constructor(app) {
        this.Curso = app.models.curso;

        this.index = this.index.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    index(req, res) {
        console.log(req.cookies['meu-cookie']);
        
        this.Curso.find().exec((err, cursos) => {
            res.render('index', { titulo: 'titulo', cursos })
        });
    }

    login(req, res) {
        const { name, password } = req.body;

        login(name, password, (result) => {
            if (result) {
                res.json(result);
            } else {
                res.status(401).json({ message: 'Erro de autenticação.' });
            }
        });
    }

    addItem(req, res) {
        // let cursos = this.Curso;
        // cursos.push({ nome: 'aluno 4', categoria: 'categoria 4' });
        res.json("ok");
    }
}

module.exports = (app) => new Home(app);