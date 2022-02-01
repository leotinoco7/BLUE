// Faça um programa que sorteie 20 números de 0 a 100,
// armazene todos em um array e imprima em ordem crescente.

var prompt = require("prompt-sync")();

let max = 100;
let min = 0;
let num = 0;
let list = [];
let quant = 20;
let tries = 0;

while (tries < quant) {
  min = Math.ceil(min);
  max = Math.floor(max);
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  list.push(num);
  tries++;
}

list = list.sort(function (a, b) {
  return a - b;
});

console.log(list);
