var prompt = require("prompt-sync")();

const num1 = +prompt("Digite um número: ");
const num2 = +prompt("Digite outro número: ");

console.log(`Resultado de ${num1} elevado a ${num2}: ${num1 ** num2}`);
