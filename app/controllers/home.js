class Home {
    constructor() {
        this.cursos = [
            { nome: 'curso 1', categoria: 'categoria 1' },
            { nome: 'aluno 2', categoria: 'categoria 2' },
            { nome: 'aluno 3', categoria: 'categoria 3' }
        ];

        this.index = this.index.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    index(req, res) {
        const cursos = this.cursos;
        res.render('index', { titulo: 'titulo', cursos });
    }

    addItem(req, res) {
        let cursos = this.cursos;
        cursos.push({ nome: 'aluno 4', categoria: 'categoria 4' });
        res.json(cursos);
    }
}

module.exports = () => new Home();