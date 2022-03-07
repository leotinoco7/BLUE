var prompt = require("prompt-sync")();

// Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50)
// e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar
// para conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).

const vida = +prompt("Digite a quantidade de vida entre 10 e 50: ");

if (vida < 10) {
  console.log("Vida inválida, digite novamente");
  return;
}

if (vida > 50) {
  console.log("Vida inválida, digite novamente");
  return;
}

const atk = +prompt("Digite o ataque entre 5 e 10: ");

if (atk < 5) {
  console.log("Ataque inválido, digite novamente");
  return;
}

if (atk > 10) {
  console.log("Ataque inválido, digite novamente");
  return;
}
