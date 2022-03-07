// Peça ao usuário uma quantidade de linhas e e outra de colunas,
// e imprima essas informações na forma de uma tabela como no exemplo
// de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]

var prompt = require("prompt-sync")();

const linhas = prompt("Digite um número de linhas: ");
const colunas = prompt("Digit eum número de colunas: ");

var matriz = [];

for (let l = 0; l < linhas; l++) {
  const cols = [];
  for (let c = 0; c < colunas; c++) {
    cols[c] = +prompt(
      `linha ${l + 1}, coluna: ${c + 1} - digite um número inteiro:`
    );
  }
  matriz[l] = cols;
}

console.table(matriz);
