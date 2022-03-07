// Crie um programa em que o usuário escolha a
// quantidade de notas serem entradas e depois
// peça e armazene essa quantidade de notas em um array.
// Ao final imprima a quantidade de alunos APROVADOS (nota >= 7),
//  EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).

var prompt = require("prompt-sync")();

let gradesA = 0;
let tries = 0;
const grade = [];
const pass = [];
const fail = [];
const retake = [];

gradesA = +prompt("Digite o total de notas: ");

while (tries < gradesA) {
  grade.push(+prompt(`${tries + 1} - Digite a nota: `));
  if (grade[tries] <= 0 || grade[tries] > 10) {
    console.log("Nota deve ser entre 0 e 10");
    break;
  } else if (grade[tries] >= 7) {
    pass.push(grade[tries]);
  } else if (grade[tries] >= 5 && grade[tries] < 7) {
    retake.push(grade[tries]);
  } else if (grade[tries] < 5) {
    fail.push(grade[tries]);
  }
  tries++;
}

console.log(`Aprovados: ${pass}`);
console.log(`Reprovados: ${fail}`);
console.log(`Recuperação: ${retake}`);

console.log(`${pass.length} alunos aprovados`);
console.log(`${fail.length} alunos reprovados`);
console.log(`${retake.length} alunos em recuperação`);
