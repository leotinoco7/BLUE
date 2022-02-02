// Faça um programa que tenha uma função chamada voto() que vai receber como parâmetro o
// ano de nascimento de uma pessoa,
//retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou
// OBRIGATÓRIO nas eleições:
var prompt = require('prompt-sync')();

function voto() {
    anoAtual = new Date().getFullYear();
    idade = anoAtual - nascimento;

    if (idade >= 18 && idade < 65) {
        return console.log('Você é obrigado a votar');
    } else if ((idade >= 16 && idade < 18) || idade > 65) {
        return console.log('O voto é opcional');
    } else {
        return console.log('Você não pode votar');
    }
}

const nascimento = prompt(`Qual o ano do seu nascimento?`);

voto();
