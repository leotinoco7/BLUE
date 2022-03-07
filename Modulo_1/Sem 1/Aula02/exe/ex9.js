// 9) Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para dólar.

var prompt = require("prompt-sync")();

const dolar = 5.6;

const valor = +prompt("Digite um valor em real: ");

const result = valor * dolar;

console.log(`O valor em dólar é ${result}`);
