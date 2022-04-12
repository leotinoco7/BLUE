const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

const playList = [
  {
    id: 1,
    band: 'Metallica',
    title: 'Master of Puppets',
  },
  {
    id: 2,
    band: 'Iron Maiden',
    title: 'Fear of the Dark',
  },
  {
    id: 3,
    band: 'The Corrs',
    title: 'Breathless',
  },
  {
    id: 4,
    band: 'Racionais Mcs',
    tittle: 'Vida loka 2',
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
