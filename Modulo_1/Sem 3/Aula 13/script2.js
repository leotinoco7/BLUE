const pessoa = {};
const lista = [];

pessoa.nome = 'leo';
pessoa.idade = 24;

console.log(pessoa);
lista.push(pessoa);

pessoa.nome = 'duda';
pessoa.idade = 15;

console.log(pessoa);
lista.push(pessoa);
// nao funciona
console.log(lista);
