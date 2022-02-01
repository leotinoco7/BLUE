// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

var prompt = require("prompt-sync")();

username = prompt("Digite seu nome: ");
age = prompt("Digite sua idade: ");
while (age <= 0 || age >= 150) {
  console.log("Idade tem que ser entre 0 e 150");
  break;
}

income = prompt("Digite seu salário: ");
while (income <= 0) {
  console.log("Salário tem que ser maior que 0");
  break;
}
mstatus = prompt("Digite seu estado cívil (s,c,v,d): ");
while (mstatus != "s" && mstatus != "c" && mstatus != "v" && mstatus != "d") {
  console.log("Estado cívili incorreto");
  break;
}
