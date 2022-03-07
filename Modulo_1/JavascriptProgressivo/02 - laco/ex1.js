// Faça um programa que peça uma nota, entre zero e dez.
// Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe
// um valor válido.

var prompt = require('prompt-sync')();

do {
    var grade = +prompt('Digite uma nota entre zero a dez: ');
    if (grade < 0 || grade > 10) {
        console.log('Nota inválida - Valor tem que ser entre 0 e 10');
    }
} while (grade < 0 || grade > 10);
