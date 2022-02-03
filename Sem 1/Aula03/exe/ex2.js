// Faça um programa para a leitura de quatro notas parciais de um aluno.
// O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.

var prompt = require("prompt-sync")();

const nota1 = +prompt("Digite sua nota1: ");
const nota2 = +prompt("Digite sua nota2: ");
const nota3 = +prompt("Digite sua nota3: ");
const nota4 = +prompt("Digite sua nota4: ");

const media = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log(media);
if (media > 10) {
  console.log("Média inválida");
} else if (media >= 7) {
  console.log(`Média: ${media}. Aprovado`);
} else if (media < 7 && media >= 5) {
  console.log(`Média: ${media}. Recuperação`);
} else {
  console.log(`Média: ${media}. Reprovado`);
}
