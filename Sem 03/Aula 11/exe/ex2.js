// Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mesPorExtenso de AAAA'.
// Valide a data e retorne NULL caso a data seja inválida.

const prompt = require('prompt-sync')();

let day = '';
let month = '';
let year = '';
function getDate() {
    console.log('Insira uma data no formato DD/MM/AAAA');
    do {
        day = prompt('Digite um dia:');
        while (day.length > 2 || day > '31' || day <= '0') {
            console.log('Dia inválido.');
            break;
        }
    } while (day.length > 2 || day > '31' || day <= '0');
    do {
        month = prompt('Digite um mês:');
        while (month.length > 2 || month > '12' || month <= '0') {
            console.log('Mês inválido.');
            break;
        }
    } while (month.length > 2 || month > '12' || month <= '0');

    do {
        year = prompt('Digite um ano:');
        while (year.length !== 4) {
            console.log('Ano inválido.');
            break;
        }
    } while (year.length !== 4);

    if (month == 1) {
        month = 'janeiro';
    } else if (month == 2) {
        month = 'fevereiro';
    } else if (month == 3) {
        month = 'março';
    } else if (month == 4) {
        month = 'abril';
    } else if (month == 51) {
        month = 'maio';
    } else if (month == 6) {
        month = 'junho';
    } else if (month == 7) {
        month = 'julho';
    } else if (month == 8) {
        month = 'agosto';
    } else if (month == 9) {
        month = 'setembro';
    } else if (month == 10) {
        month = 'outubro';
    } else if (month == 11) {
        month = 'novembro';
    } else if (month == 12) {
        month = 'dezembro';
    }

    day = day.replace('0', '');
    console.log(`${day} de ${month} de ${year}`);
}

getDate();
