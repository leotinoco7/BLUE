// Faça um programa que peça um número par,
// e repita a execução caso o número digitado seja ímpar.

var prompt = require("prompt-sync")();

num = +prompt("Digite número par: ");
while (num % 2 == 1) {
  console.log("O número é impar");
  break;
}
if (num % 2 == 0) {
  console.log("O número é par");
}
