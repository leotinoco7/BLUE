// Calcular a média de todos os números de uma array.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;
for (x = 0; x < array.length; x++) {
    soma += x;
}
media = soma / array.length;
console.log(`Média dos valores da array: ${media}`);
