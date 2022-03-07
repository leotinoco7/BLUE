// Faça um programa que simule um lançamento de dados.
// Lance o dado 100 vezes e armazene os resultados em um array.
// Depois, mostre quantas vezes cada valor foi conseguido.

var prompt = require("prompt-sync")();

let tries = 0;
let dicet = 100;
const data = [];

let um = 0;
let dois = 0;
let tres = 0;
let quatro = 0;
let cinco = 0;
let seis = 0;

while (tries < dicet) {
  let max = 6;
  let min = 1;
  let num = 0;
  min = Math.ceil(min);
  max = Math.floor(max);
  num = Math.floor(Math.random() * (max - min + 1)) + min;

  data.push(num);
  tries++;
  if (num == 1) {
    um++;
  } else if (num == 2) {
    dois++;
  } else if (num == 3) {
    tres++;
  } else if (num == 4) {
    quatro++;
  } else if (num == 5) {
    cinco++;
  } else if (num == 6) {
    seis++;
  }
}
console.log(data);
console.log(`um - ${um} / dois - ${dois} / tres - ${tres}`);
console.log(`quatro - ${quatro} / cinco - ${cinco} / seis - ${seis}`);
