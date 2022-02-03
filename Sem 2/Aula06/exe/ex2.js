// Faça um Programa que peça a idade e a altura de 5 pessoas,
// armazene cada informação no seu respectivo array.
// Imprima a média de idade e de altura.

var prompt = require("prompt-sync")();

let tries = 0;
const age = [];
const height = [];
let avgA = 0;
let avgH = 0;

while (tries < 5) {
  age.push(+prompt(`${tries + 1} - Digite uma altura: `));
  height.push(+prompt(`${tries + 1} - Digite uma idade: `));
  avgA += age[tries];
  avgH += height[tries];
  tries++;
}

avgAge = avgA / tries;
console.log(`Média de idade: ${avgAge} anos`);

avgHeight = avgH / tries;
console.log(`Média de altura: ${avgHeight} cm`);
