// Desafio: O Usuario deve digitar um número entre 1 e 365, com este valor você deve me dizer
//qual mês do ano esse dia cai

var prompt = require("prompt-sync")();

const dia = +prompt("Digite um dia entre 1 e 365: ");

if (dia < 1) {
  console.log("Número inválido");
} else if (dia < 31) {
  console.log("O mês é janeiro");
} else if (dia <= 59) {
  console.log("O mês é fevereiro");
} else if (dia <= 90) {
  console.log("O mês é março");
} else if (dia <= 120) {
  console.log("O mês é abril");
} else if (dia <= 150) {
  console.log("O mês é maio");
} else if (dia <= 180) {
  console.log("O mês é junho");
} else if (dia <= 210) {
  console.log("O mês é julho");
} else if (dia <= 240) {
  console.log("O mês é agosto");
} else if (dia <= 270) {
  console.log("O mês é setembro");
} else if (dia <= 300) {
  console.log("O mês é outubro");
} else if (dia <= 330) {
  console.log("O mês é novembro");
} else if (dia <= 365) {
  console.log("O mês é dezembro");
} else {
  console.log("Número inválido.");
}
