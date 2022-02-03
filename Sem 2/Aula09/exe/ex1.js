// Faça um programa que peça 2 números e crie um array contando todos os
// os números sequenciais do primeiro até o segundo, independente de ser maior ou menor.

var prompt = require("prompt-sync")();

var matriz = [];
num1 = +prompt("Digite um número: ");
num2 = +prompt("Digite um outro número: ");
matriz.push(num1, num2);

matrizN = matriz.sort(function (a, b) {
  return a - b;
});

for (var x = matriz[0] + 1; x < matriz[1]; x++) {
  matrizN.push(x);
}

matrizL = matrizN.sort(function (a, b) {
  return a - b;
});

console.log(matrizL);
