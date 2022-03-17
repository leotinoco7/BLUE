const express = require('express');
const path = require('path');
const app = express();

const port = 3000;
let message = '';

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index', {
        titulo: 'POKEDEX',
    });
});

app.listen(port, () =>
    console.log(`Servidor rodando em http://localhost:${port}`),
);
