const prompt = require('prompt-sync')();

const pessoa = {
    nome: '',
    dice: '',
};

do {
    var rounds = +prompt(
        'Digite a quantidade de rodadas que você deseja jogar: ',
    );
    while (rounds < 0) {
        console.log('Quantidade de rodadas inválida!');
        break;
    }
} while (rounds < 0);

do {
    const players = +prompt('Digite quantos jogadores irão jogar (max 12). ');
    while (players <= 0 || players > 12) {
        console.log('Quantidade de jogadores inválido!');
        break;
    }
    for (x = 0; x < players; x++);
    {
        let pessoa = new Pessoa(pessoa.nome, pessoa.dice);
    }
} while (players <= 0 || players > 12);
