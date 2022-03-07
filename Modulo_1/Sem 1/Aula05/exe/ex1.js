// Faça um programa que leia um nome de usuário e a sua senha e
// não aceite a senha igual ao nome do usuário, mostrando uma
// mensagem de erro e voltando a pedir as informações.

var prompt = require("prompt-sync")();

user = prompt("Digite o nome de usuário: ");
pass = prompt("Digite a senha: ");
while (user == pass) {
  console.log("Usuário e senha  não podem ser iguais");
  break;
}
