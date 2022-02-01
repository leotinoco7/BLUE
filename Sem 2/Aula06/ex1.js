// Faça um Programa que leia 20 números inteiros e armazene-os num array.
// Armazene os números pares no array PAR e os números IMPARES no array IMPAR.
// Imprima os três vetores.

var prompt = require("prompt-sync")();

let tries = 0;
const numeros = [];
const pares = [];
const impares = [];

while (tries < 20) {
  numeros.push(+prompt(`${tries + 1} - Digite um número inteiro: `));
  if (numeros[tries] % 2 === 0) {
    pares.push(numeros[tries]);
  } else {
    impares.push(numeros[tries]);
  }
  tries++;
}

console.log("Números originais");
console.log(numeros);
console.log(`Pares - total: ${pares.length}`);
console.log(pares);
console.log(`Impares - total: ${impares.length}`);
console.log(impares);
