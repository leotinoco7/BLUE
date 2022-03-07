function somar(a, b, c) {
    console.log('A soma é: ', a + b + c);
}

const numeros = [10, 15, 20];

somar(...numeros);

const numeros2 = [10, 15, 20];

const copiaDosNumeros = [...numeros2]; // [10, 15, 20]

console.log(numeros2);
console.log(copiaDosNumeros);
