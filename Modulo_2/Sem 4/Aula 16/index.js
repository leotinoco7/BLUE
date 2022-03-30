const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
require('dotenv').config();
const Filme = require('./models/filmes');

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const filmes = await Filme.findAll();

    res.render('index', {
        filmes,
    });
});

app.get('/filmes/:id', async (req, res) => {
    const filme = await Filme.findByPk(req.params.id);

    res.render('detalhes', {
        filme,
    });
});

app.get('/criar', (req, res) => {
    res.render('criar');
});

app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`),
);
