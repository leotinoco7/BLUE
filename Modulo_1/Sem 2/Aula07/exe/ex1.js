// Faça um programa que peça um número inteiro e crie arrays com:
// Todos os números pares de 0 ao número escolhido
// Todos os números ímpares do 0 ao número escolhido

var prompt = require("prompt-sync")();

const numbers = [];
const pair = [];
const impair = [];
let tries = 0;

let num = +prompt("Digite um número inteiro: ");

while (tries <= num) {
  numbers.push(tries);
  if (numbers[tries] % 2 == 0) {
    pair.push(numbers[tries]);
  } else {
    impair.push(numbers[tries]);
  }
  tries++;
}
console.log(`Os numeros gerados: ${numbers}`);
console.log(`Os numeros pares: ${pair}`);
console.log(`Os numeros ímpares: ${impair}`);
