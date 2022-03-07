// Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente,
// de modo que o lado A representa o maior dos 3 lados.
// A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
// Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
// Se A = B + C , apresente a mensagem: TRIANGULO RETANGULO;
// Se A > B + C , apresente a mensagem: TRIANGULO OBTUSANGULO;
// Se A < B + C , apresente a mensagem: TRIANGULO ACUTANGULO;
// Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

var prompt = require("prompt-sync")();

let valorA = +prompt("Digite um valor A: ");
let valorB = +prompt("Digite outro valor B: ");
let valorC = +prompt("Digite outro valor C: ");

let lista = [valorA, valorB, valorC];
lista.sort();
lista.reverse();

valorA = lista[0];
valorB = lista[1];
valorC = lista[2];

if (valorA >= valorB + valorC) {
  console.log("Não forma um triângulo");
} else if ((valorA = valorB + valorC)) {
  console.log("Triângulo retângulo");
} else if (valorA > valorB + valorC) {
  console.log("Triângulo obtusangul");
} else if (valorA < valorB + valorC) {
  console.log("Triângulo acutangulo");
} else if ((valorA = ValorB = ValorC)) {
  console.log("Triângulo equilátero");
}
// else if
