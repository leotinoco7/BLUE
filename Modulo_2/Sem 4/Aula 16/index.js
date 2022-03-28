const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const filmes = [
    {
        id: 1,
        nome: 'Harry Potter e a Pedra Filosofal',
        descricao: 'O filme do Harry Potter',
        imagem: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg',
    },
    {
        id: 2,
        nome: 'Senhor dos Anéis: As Duas Torres',
        descricao: 'O filme do Sr. Dos Anéis',
        imagem: 'https://i.pinimg.com/originals/e5/e8/cf/e5e8cfc267a11c8ae6ba728b4537543f.jpg',
    },
];

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        filmes,
    });
});

app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`),
);
