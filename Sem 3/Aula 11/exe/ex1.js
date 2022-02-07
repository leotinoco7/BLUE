// Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador
// matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.

const prompt = require('prompt-sync')();

let operador = '';
let num = [];
let resultado = 0;
// let a = 0;
// let b = 0;

function getOperator(operador) {
    do {
        var operador = prompt('Digite um operador matemático (+, -, /, *): ');
        while (
            operador !== '+' &&
            operador !== '-' &&
            operador !== '/' &&
            operador !== '*'
        ) {
            console.log('Operador inválido');
            break;
        }
    } while (
        operador !== '+' &&
        operador !== '-' &&
        operador !== '/' &&
        operador !== '*'
    );
    if (
        operador == '+' ||
        operador == '-' ||
        operador == '/' ||
        operador == '*'
    ) {
        return operador;
    }
}

function getNumber(a, b) {
    a = +prompt('Digite um número: ');
    b = +prompt('Digite outro número: ');
    num.push(a);
    num.push(b);
    return a;
}

operador = getOperator();
getNumber();

if (operador == '+') {
    resultado = num[0] + num[1];
} else if (operador == '-') {
    resultado = num[0] - num[1];
} else if (operador == '/') {
    resultado = num[0] / num[1];
} else if (operador == '*') {
    resultado = num[0] * num[1];
}

console.log(
    `Resultado da operação: ${num[0]} ${operador} ${
        num[1]
    } = ${resultado.toFixed(6)}`,
);
