// Faça um Programa que peça dois números e
// imprima o maior deles, e informe caso eles sejam iguais.

var prompt = require("prompt-sync")();

const n1 = +prompt("Digite um número: ");
const n2 = +prompt("Digite um segundo número: ");

if (n1 == n2) {
  console.log("Números iguais");
} else if (n1 >= n2) {
  console.log(`O primeiro número (${n1}) é maior que o segundo (${n2})`);
} else {
  console.log(`O segundo número (${n2}) é maior que o primeiro (${n1})`);
}
