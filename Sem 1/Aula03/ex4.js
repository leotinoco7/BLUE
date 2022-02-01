// Faça um programa que leia 2 valores inteiros (A e B).
// Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos",
// indicando se os valores lidos são múltiplos entre si. Exemplo:

var prompt = require("prompt-sync")();

const v1 = +prompt("Digite um valor inteiro: ");
const v2 = +prompt("Digite outro valor inteiro: ");

if (v1 % v2 == 0) {
  console.log("Número são múltiplos");
} else {
  console.log("Números não são múltiplos");
}
