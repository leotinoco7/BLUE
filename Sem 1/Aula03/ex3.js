// Faça um programa que leia um número, e informe se ele é par ou impar

var prompt = require("prompt-sync")();

const n1 = +prompt("Digite um número: ");

if (n1 % 2 === 0) {
  console.log("Número par");
} else {
  console.log("Número ímpar");
}
