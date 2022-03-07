// Crie um programa que entre com os dados de altura e sexo de 5 pessoas.
// Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas
// são do sexo feminino.
// Mostre também qual é a maior altura e se essa altura é de um homem ou
// uma mulher.

const sexo = [];
let homens = 0;
let mulheres = 0;
var alturaH = [];
var alturaM = [];
var prompt = require('prompt-sync')();

console.log('Digite a altura e sexo de 5 pessoas:');
for (let x = 0; x < 5; x++) {
    let sexoP = prompt(`${x + 1} - Digite o sexo (M/F):`);
    let alturaP = +prompt(`${x + 1} - Digite a altura:`);
    if (sexoP == 'M') {
        homens++;
        alturaH.push(alturaP);
    } else if (sexoP == 'F') {
        mulheres++;
        alturaM.push(alturaP);
    }
}

alturaH = alturaH.sort(function (a, b) {
    return a - b;
});

alturaM = alturaM.sort(function (a, b) {
    return a - b;
});

ultimoH = alturaH.length;
maiorH = alturaH[ultimoH - 1];

ultimoM = alturaM.length;
maiorM = alturaM[ultimoM - 1];

console.log(`${homens} homens`);
console.log(`${mulheres} mulheres`);

if (maiorH > maiorM) {
    console.log(`A maior altura é de um homem (${maiorH})`);
} else if (maiorM > maiorH) {
    console.log(`A maior altura é de uma mulher (${maiorM})`);
} else if (maiorM == maiorH) {
    console.log(`Altura igual`);
}
