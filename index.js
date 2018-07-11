const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
const alunosRouter = express.Router();
const PORT = 80;

alunosRouter.get('/:id', (req, res) => res.send(req.params.id));
alunosRouter.get('/', (req, res) => res.send('/'));

app.use('/alunos', alunosRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.body.message = 'my middleware';
    next();
});


app.get('/:var', (req, res) => {
    const obj = {
        a: 1,
        b: 2
    };
    res.status(404).send(req.params['var']);
});

app.post('/teste', (req, res) => {
    const myJson = req.body;
    res.format({
        text: () => res.send('Just Text'),
        json: () => {
            myJson.reqType = 'JSON';
            res.json(myJson);
        }
    });
});

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));