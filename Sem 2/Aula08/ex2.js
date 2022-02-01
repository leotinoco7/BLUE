// Escreva um programa que peça um número e escreva o fatorial dele.
// Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

var prompt = require("prompt-sync")();

let num = +prompt("Digite um número: ");
resultado = num;
for (let x = 1; x < num; x++) {
  resultado *= x;
}
console.log(resultado);
