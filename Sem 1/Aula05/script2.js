var prompt = require("prompt-sync")();
let sensor = 0;

while (sensor <= 10) {
  sensor = prompt("Digite um número: ");
}

console.log("temperatura elevada");
