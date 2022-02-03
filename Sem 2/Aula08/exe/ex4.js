// Faça um programa que carregue uma lista com os modelos de cinco carros.
// Carregue uma outra lista com o consumo desses carros, isto é,
// quantos quilômetros cada um desses carros faz com um litro de combustível.
// Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para
// percorrer uma distância de 1000 quilômetros e quanto isto custará,
// considerando um que a gasolina custe R$ 5,50 o litro.

var prompt = require("prompt-sync")();

const quant = prompt("Digite uma quantidade de modelos de carro: ");
const modelos = [];
const consumo = [];
const consumo1000 = [];
const custo = [];
const gasolina = 5.5;

for (let x = 0; x < quant; x++) {
  modelos[x] = prompt(`${x + 1} - Digite um modelo de carro: `);
  consumo[x] = +prompt(`${x + 1} - Digite o consumo desse carro: `);
}

for (let x = 0; x < quant; x++) {
  console.log(`Modelo: ${modelos[x]} - Consumo: ${consumo[x]}`);
}
console.log("---------------------");

let economico = 0;
let carroEco = "";

for (const carroConsumo of consumo) {
  if (carroConsumo > economico) {
    economico = carroConsumo;
  }
  consumo1000.push(1000 / carroConsumo);
  custo.push((1000 / carroConsumo) * gasolina);
}

carroEco = modelos[consumo.indexOf(economico)]; // primeira ocorrencia do valor

for (let x = 0; x < modelos.length; x++) {
  console.log(
    `Carro: ${modelos[x]}, consumo em litros/1000km: ${consumo1000[x].toFixed(
      2
    )}, Custo em R$:${custo[x].toFixed(2)}`
  );
}
console.log(`Modelo: ${carroEco} - Consumo: ${economico}`);
