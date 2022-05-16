const numeros = [];

for (let num = 1000; num <= 9999; num++) {
    let soma = 0;
    numFn = num;
    while (numFn != 0) {
        soma = soma + (numFn % 10);
        numFn = parseInt(numFn / 10);
    }
    if (soma == 21) {
        numeros.push(num);
    }
}
console.log(numeros);
