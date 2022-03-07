var prompt = require("prompt-sync")();

var prompt = require("prompt-sync")();

let n = prompt("Digite o seu nome:\n");
let n1 = +prompt("Digite a nota da primeira prova:\n");
let n2 = +prompt("Digite a nota da segunda prova:\n");
let n3 = +prompt("Digite a nota da terceira prova:\n");
let n4 = +prompt("Digite a nota da quarta prova:\n");

m = (n1 + n2 + n3 + n4) / 4;

if (m > 7 || m == 7) {
  console.log(n + ", Você foi aprovado!");
} else {
  console.log(n + ",Você foi reprovado!");
}
