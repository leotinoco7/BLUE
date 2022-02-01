// Calcular a soma dos números de uma array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;
for (x = 0; x < array.length; x++) {
    soma += x;
}
console.log(`Soma dos valores da array: ${soma}`);
