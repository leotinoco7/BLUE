// Imprimir os 10 primeiros números da sequência
// de Fibonacci sem usar recursividade
// Assim, a fórmula a seguir define a sequência:
// Fn = Fn - 1 + Fn - 2
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// Assim, começando pelo 1, essa sequência é formada somando cada numeral
// com o numeral que o antecede. No caso do 1,
// repete-se esse numeral e soma-se, ou seja, 1 + 1 = 2.
// De seguida soma-se o resultado com o numeral que o antecede,
// ou seja, 2 + 1 = 3 e assim sucessivamente, numa sequência infinita:

const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (let x = 2; x < 10; x++) {
  fibonacci[x] = fibonacci[x - 2] + fibonacci[x - 1];
}

console.log(fibonacci);
