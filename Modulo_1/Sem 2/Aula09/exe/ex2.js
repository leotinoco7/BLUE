// Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X
// , um valor por linha, inclusive o X, se for o caso. Use o laço FOR.

var prompt = require("prompt-sync")();

const x = +prompt("Digite um número inteiro:");
const x2 = parseInt(x);
const numeros = [];
const impares = [];
numeros.push(x2);
for (var y = 0; y <= x2; y++) {
  numeros.push(y);
  if (y % 2 == 1) {
    impares.push(y);
  }
}

for (var z = 0; z < impares.length; z++) {
  console.log(impares[z]);
}
