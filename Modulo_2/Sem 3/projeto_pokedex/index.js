const express = require('express');
const path = require('path');
const app = express();
let x = 0;

const port = 3000;

const menu = [
    {
        title: 'HOME',
        link: '/',
    },
    {
        title: 'ADD',
        link: '/add',
    },
    {
        title: 'POKÉDEX',
        link: '/pokedex',
    },
    {
        title: 'ABOUT',
        link: '/about',
    },
];

const pokedex = [
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '2',
        name: 'Charmander2',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '3',
        name: 'Charmander3',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '4',
        name: 'Charmander4',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '5',
        name: 'Charmander5',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
];

const type = [
    'Água',
    'Dragão',
    'Elétrico',
    'Fada',
    'Fantasma',
    'Ferro',
    'Fogo',
    'Gelo',
    'Grama',
    'Inseto',
    'Lutador',
    'Normal',
    'Pedra',
    'Psíquico',
    'Sombrio',
    'Terra',
    'Veneno',
    'Voador',
];

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { pokedex, menu });
});

app.get('/add', (req, res) => {
    res.render('add', { pokedex, menu, type });
});

app.get('/pokedex', (req, res) => {
    res.render('pokedex', { pokedex, menu, x });
});

app.get('/about', (req, res) => {
    res.render('about', { pokedex, menu });
});

app.post('/add2', (req, res) => {
    const pokemon = req.body;
    pokemon.id = pokedex.length + 1;
    pokedex.push(pokemon);

    res.redirect('/add');
});

app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`),
);
