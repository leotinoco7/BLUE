// Faça um programa que peça um número e
// imprima toda a tabuada dele do 1 ao 10.

var prompt = require("prompt-sync")();

let num = +prompt("Digite um número: ");

for (let x = 1; x <= 10; x++) {
  console.log(`Tabuada: ${num}x${x} = ${x * num}`);
}
