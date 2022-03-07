// Faça o cálculo contrário: Leia um valor inteiro correspondente
// à idade de uma pessoa em dias e informe-a em anos, meses e dias.
// Também considere todo ano com 365 dias e todo mês com 30 dias.

var prompt = require("prompt-sync")();

const dias1 = +prompt("Dias:");
const restodia_pos = parseInt(dias1 % 365);
const ano = parseInt(dias1 / 365);
const mes = parseInt(restodia_pos / 30);
const resto = parseInt(restodia_pos % 30);

console.log(`Sua idade: é ${ano} anos, ${mes} meses e ${resto} dias`);
