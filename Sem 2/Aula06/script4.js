var prompt = require("prompt-sync")();

const estados = ["são paulo", "rio de janeiro", "bahia"];

estados.push(prompt("digite um estado: "));

console.log(estados);

estados.unshift(prompt("digite um estado"));
console.log(estados);
