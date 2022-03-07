/*Exercicios:
# Faça um programa que tenha uma função chamada área(), que receba as dimensões de um terreno retangular (largura e comprimento) 
e mostre a área do terreno:
*/
const prompt = require('prompt-sync')();

function area(largura, comprimento) {
    let area = largura * comprimento;
    console.log(`Área igual a: ${area} m2`);
    return area;
}

const largura = prompt('Digite a largura:');
const comprimento = prompt('Digite o comprimento: ');

// EXEMPLO COM OS DADOS PEDIDOS NO PROMPT

area(largura, comprimento);

// COM VALORES PREDEFINIDOS

area(20, 15);
