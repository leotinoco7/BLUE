// Localizar o maior valor dentro de uma array de números.

var prompt = require("prompt-sync")();

const array = [];
let num = 0;

quant = parseInt(+prompt("Digite um total de números:"));

for (x = 0; x < quant; x++) {
    num = parseInt(+prompt(`${x+1} - Digite um número inteiro: `));
    array.push(num)
}
array.sort(function (a, b) {
    return a - b;
  });

ultimo = array.length;
maior = array[ultimo - 1];
console.log(`Maior número: ${maior}`);