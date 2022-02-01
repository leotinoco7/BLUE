// Imprimir a tabuada do número 8

var prompt = require("prompt-sync")();

num = 8
console.log(`Tabuada do número ${num}:`)
for (let x = 1; x <= num; x++) {
    console.log(`${num} x ${x} = ${x * num}`);
}