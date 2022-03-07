// Faça um programa que, dado uma lista de N números
// (o usuário deve determinar a quantidade de números a serem entrados
// e entrar cada um deles), determine o menor valor, o maior valor e a
// soma dos valores.

var prompt = require("prompt-sync")();
const numeros = [];
var soma = 0;
let x = 0;

quant = +prompt("Digite uma quantidade de números: ");

for (x = 0; x < quant; x++) {
  num = +prompt(`${x + 1}Digite um número: `);
  numeros.push(num);
}

numeros2 = numeros.sort(function (a, b) {
  return a - b;
});

console.log(`Menor número: ${numeros2[0]}`);
var maior = numeros2[numeros.length - 1];
console.log(`Maior número: ${maior}`);

for (x = 0; x < numeros2.length; x++) {
  soma += numeros2[x];
}
console.log(`Soma dos valores: ${soma}`);
