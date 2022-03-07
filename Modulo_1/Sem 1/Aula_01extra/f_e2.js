// Neste problema, deve-se ler o nome de uma peça 1, o número de peças 1, o valor unitário de cada peça 1,
// o nome de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2.
// Após, calcule e mostre o valor a ser pago.

var prompt = require("prompt-sync")();

const p1 = prompt("Digite o nome da primeira peça: ");
const np1 = +prompt("Digite o número de peças: ");
const vp1 = +prompt("Digite o valor unitário de cada peça: ");

const p2 = prompt("Digite o nome da segunda peça: ");
const np2 = +prompt("Digite o número de peças: ");
const vp2 = +prompt("Digite o valor unitário de cada peça: ");

console.log(`Valor total igual a: ${np1 * vp1 + np2 * vp2} `);
