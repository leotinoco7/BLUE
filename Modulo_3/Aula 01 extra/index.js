const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(cors());

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
    band: 'The-Corrs',
    title: 'Breathless',
  },
  {
    id: 4,
    band: 'Racionais Mcs',
    title: 'Vida loka 2',
  },
  {
    id: 5,
    band: 'Criolo',
    title: 'Padê onã',
  },
  {
    id: 6,
    band: 'E-40',
    title: 'Choices',
  },
  {
    id: 7,
    band: 'Zé ramalho',
    title: 'Vila do sossego',
  },
  {
    id: 8,
    band: 'Iron Maiden',
    title: '666 The Number of the Beast',
  }
];

app.get('/musicas/find-musicas', (req, res) => {
  res.send(playList);
});


app.get('/musicas/find-musica/:id', (req, res) => {
  res.send(playList.find((musica) => musica.id == req.params.id));
});

app.get('/musicas/find-band/:band', (req, res) => {
    const musicax = playList.filter((musica) => musica.band == req.params.band);
    
    if (musicax !== [] || musicax !== null){
        res.send(musicax);
    }else {
      res.send("musica não encontrada");
    }
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
