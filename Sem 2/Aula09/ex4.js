// Numa eleição existem três candidatos.
// Faça um programa que peça o número total de eleitores.
// Peça para cada eleitor votar e ao final mostrar o número de votos
// de cada candidato.

var prompt = require("prompt-sync")();

quant = +prompt("Digite uma quantidade de eleitores: ");
console.log("Escolha seu candidato");
console.log("Bolsonaro - 1");
console.log("Lula - 1");
console.log("Ciro - 1");
votos = [];
let somaBolsonaro = 0;
let somaLula = 0;
let somaCiro = 0;
let somaInvalido = 0;

for (x = 0; x < quant; x++) {
  voto = +prompt(`Eleitor ${x + 1} - Digite o numero de seu candidato: `);
  votos.push(voto);
  if (voto == 1) {
    somaBolsonaro++;
  } else if (voto == 2) {
    somaLula++;
  } else if (voto == 3) {
    somaCiro++;
  } else {
    somaInvalido++;
  }
}
console.log(`Total de votos: ${votos.length}`);
console.log(`Votos no Bolsonaro: ${somaBolsonaro}`);
console.log(`Votos no Lula: ${somaLula}`);
console.log(`Votos no Ciro: ${somaCiro}`);
console.log(`Votos inválidos: ${somaInvalido}`);
