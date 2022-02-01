// Faça um programa em que o usuário escolha a quantidade de
// alunos a serem cadastrados e peça o nome e nota de cada um.
// Armazene as informações em duas listas separadas e no final imprima o nome e a nota
// correspondente de cada aluno, e a média total da notas.

var prompt = require("prompt-sync")();

let tries = 0;
let num = 0;
const name = [];
const grade = [];
let avgG = 0;
num = prompt("Digite o total de alunos: ");

while (tries < num) {
  name.push(prompt(`${tries + 1} - Digite o nome do aluno: `));
  grade.push(+prompt(`${tries + 1} - Digite a nota do aluno: `));
  avgG += grade[tries];
  tries++;
}

tries = 0;

while (tries < num) {
  console.log(`Nome do aluno: ${name[tries]} - Nota: ${grade[tries]}`);
  tries++;
}

console.log(`Média total de notas: ${(avgG / tries).toFixed(2)}`);
