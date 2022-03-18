const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
const pokedex = [
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
    {
        id: '4',
        name: 'Charmander',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        type: 'Fire',
    },
];

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { pokedex });
});

app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`),
);
