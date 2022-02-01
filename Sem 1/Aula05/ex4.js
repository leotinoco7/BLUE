// Jogo da adivinhação -
// Escreva um programa que faça o computador “pensar” em um número inteiro
//  entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número
//  escolhido pelo computador. O programa deve ser repetir até o usuário
//  acertar o número, e a cada palpite deve dizer se o número é maior ou
//  menor que o palpite.
//  No final dele deve escrever na tela que o usuário encontrou o número, e
//  mostrar a quantidade de palpites que foi necessária.

var prompt = require("prompt-sync")();

let num = 0;
let min = 1;
let max = 10;
min = Math.ceil(min);
max = Math.floor(max);
num = Math.floor(Math.random() * (max - min + 1)) + min;

let tries = 1;
let hint = 0;
hint = +prompt("O computador pensou num número de 0 a 10, tente advinhá-lo: ");
while (num !== hint) {
  tries++;
  console.log(`Você errou! Tente novamente`);
  hint = +prompt(
    "O computador pensou num número de 0 a 10, tente advinhá-lo: "
  );
}
if (num === hint) {
  console.log(`Você acertou em ${tries} tentativas`);
}
