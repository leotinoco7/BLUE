// Leia 2 valores A e B, que correspondem a 2 notas de um aluno. A seguir calcule
// e informe a média do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6.

var prompt = require("prompt-sync")();

const nota1 = +prompt("Digite a primeira nota: ");
const nota2 = +prompt("Digite a segunda nota: ");

const media = (nota1 * 4 + nota2 * 6) / 10;
console.log(`Média do aluno igual a ${media}`);
