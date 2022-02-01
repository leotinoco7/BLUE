// Faça um programa que leia um nome de usuário e a sua senha e
// não aceite a senha igual ao nome do usuário, mostrando uma mensagem de
// erro e voltando a pedir as informações.

var prompt = require('prompt-sync')();

var nome = prompt('Digite um nome: ');
do {
    var senha = prompt('Digite uma senha: ');
    while (nome == senha) {
        console.log('Usuário não pode ser igual a senha');
        break;
    }
} while (nome == senha);
