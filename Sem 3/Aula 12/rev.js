var prompt = require('prompt-sync')();

function saudacao(nome, anoNascimento) {
    const anoAtual = 2022;
    const idade = anoAtual - anoNascimento;

    console.log();
    console.log(`Seja bem vindo(a) ${nome}`);

    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }

    console.log();
}

const nomeDigitado = prompt('Qual o seu nome? ');
const nascimentoDigitado = prompt('Qual o seu ano de nascimento? ');

saudacao(nomeDigitado, nascimentoDigitado);
