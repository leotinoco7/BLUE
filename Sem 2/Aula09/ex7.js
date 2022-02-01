// Imprimir a soma dos números de 1 a 10.

var prompt = require("prompt-sync")();

num = 10
soma = 0

for (x = 0; x <= num; x++) {
    soma += x
}
console.log(soma);