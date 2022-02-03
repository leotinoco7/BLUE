// 8) Qual o valor do troco? - Crie um programa que calcule o troco de uma
// compra no valor de R$100,98 e que foi paga com R$150,00.
// O valor do troco deve ser exibido no console.

var prompt = require("prompt-sync")();

const compra = +prompt("Digite o valor compra: ");
const valor = +prompt("Digite o valor pago: ");
if (compra > valor) {
  console.log("Dinheiro insuficiente");
  return;
}
const troco = valor - compra;
console.log(`O valor do troco é: ${troco}`);
