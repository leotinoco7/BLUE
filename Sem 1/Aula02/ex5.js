// 5) Faça um programa de cadastro de clientes que mostre um menu de opções
//  e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

var prompt = require("prompt-sync")();

console.log("Escolha uma das opções");
console.log("Azul = Opção 1");
console.log("Vermelho = Opção 2");
console.log("Preto = Opção 3");

const opcao = prompt("Digite uma opção");
if (opcao === "1") {
  console.log("Você escolheu azul");
}
if (opcao === "2") {
  console.log("Você escolheu vermelho");
}
if (opcao === "3") {
  console.log("Você escolheu preto");
}
