// Faça um programa que peça um número inteiro e
// determine se ele é ou não um número primo.
// Um número primo é aquele que é divisível
// somente por ele mesmo e por 1.

var prompt = require('prompt-sync')();

num = parseInt(+prompt('Digite um número: '));

for (x = 2; x < num; x++) if (num % x == 0);
{
    console.log('Número não é primo');
}
