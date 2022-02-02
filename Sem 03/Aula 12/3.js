// Faça um programa, com uma função que necessite de
// um argumento. A função retorna o valor de
// caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu
//  argumento for zero ou negativo.

var prompt = require('prompt-sync')();

function valor(num) {
    if (num > 0) {
        return 'P';
    } else if (num < 0) {
        return 'N';
    } else {
        return 'ZERO';
    }
}

const num = prompt('Digite um número: ');

console.log(valor(num));
