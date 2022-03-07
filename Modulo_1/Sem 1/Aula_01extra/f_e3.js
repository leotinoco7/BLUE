// Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias.
// Calcule e exiba o total de dias que essa pessoa já viveu.
// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.

var prompt = require("prompt-sync")();

const anos = +prompt("Anos:");
const meses = +prompt("Meses: ");
const dias = +prompt("Dias: ");

console.log(`Total de dias: ${anos * 360 + meses * 30 + dias} `);
