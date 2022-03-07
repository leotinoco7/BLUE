var prompt = require("prompt-sync")();

const filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter"];

console.log(filmes);
let filmeRemovido = filmes.pop();
// filmes.pop();
console.log(filmes);
console.log(filmeRemovido);

console.log(filmes);
filmeRemovido = filmes.shift();
console.log(filmes);
console.log(filmeRemovido);
