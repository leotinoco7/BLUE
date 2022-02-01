// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

var prompt = require('prompt-sync')();

do {
    var nome = prompt('Digite um nome: ');
    while (nome.length <= 3) {
        console.log('Nome deve ter mais que 3 caracteres');
        break;
    }
} while (nome.length <= 3);

do {
    var idade = +prompt('Digite sua idade: ');
    while (idade < 0 || idade > 150) {
        console.log('Idade deve ser maior que 0 e menor que 150');
        break;
    }
} while (idade < 0 || idade > 150);

do {
    var salario = +prompt('Digite seu salário: ');
    while (salario <= 0) {
        console.log('Salário deve ser maior que 0');
        break;
    }
} while (salario <= 0);

do {
    var sexo = prompt('Digite seu sexo: ');
    while (sexo !== 'm' && sexo !== 'f') {
        console.log('Sexo deve ser m ou f');
        break;
    }
} while (sexo !== 'm' && sexo !== 'f');

do {
    var estc = prompt('Digite seu estado cívil (s, c, v, d): ');
    while (estc !== 's' && estc !== 'c' && estc !== 'v' && estc !== 'd') {
        console.log('Estado cívil deve ser s, c, v, d');
        break;
    }
} while (estc !== 's' && estc !== 'c' && estc !== 'v' && estc !== 'd');
