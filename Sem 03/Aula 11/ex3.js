// Escreva uma função para conversão de temperatura.
// Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura
// está em Celsius, Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar
// qual valor quer retornar.
const prompt = require('prompt-sync')();

console.log('Conversor de temperatura');
do {
    console.log('Digite a escala em que a temperatura está:');
    tipo = prompt(
        'C para celsius, F para Fahrenreit ou K para Kelvin: ',
    ).toLowerCase();
    console.log(tipo);

    while (tipo !== 'c' && tipo !== 'f' && tipo !== 'k') {
        console.log('Dado inválido.');
        break;
    }
} while (tipo !== 'c' && tipo !== 'f' && tipo !== 'k');

num = prompt('Digite a temperatura: ');

function convertTemp(num, tipo) {
    let Fahrenheit;
    let Kelvin;
    let Celsius;
    if (tipo == 'c') {
        Celsius = num;
        Kelvin = num + 273.15;
        Fahrenheit = num * 1.8 + 32;
    } else if (tipo == 'k') {
        Kelvin = num;
        Celsius = num - 273.15;
        Fahrenheit = (num - 273.15) * 1.8 + 32;
    } else if (tipo == 'f') {
        Fahrenheit = num;
        Celsius = (num - 32) / 1.8;
        Kelvin = Celsius - 273.15;
    }
    console.log(`Temperatura em Celsius: ${Celsius}°C.`);
    console.log(`Temperatura em Fahrenheit: ${Fahrenheit}F.`);
    console.log(`Temperatura em Kelvin: ${Kelvin}K.`);

    let retorno = prompt(
        'Qual temperatura deseja retornar? (F, K ou C)',
    ).toLowerCase;
    if (retorno == 'c') {
        return Celsius;
    } else if (tipo == 'k') {
        return Kelvin;
    } else if (tipo == 'f') {
        return Fahrenheit;
    } else {
        ('Tipo errado');
    }
}

convertTemp(num, tipo);
