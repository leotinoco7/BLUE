// const paulo = {
//     nome: 'Paulo',
//     sobrenome: 'Salvatore',
//     idade: 20,
//     exibirNome: function () {
//         console.log(`${this.nome} ${this.sobrenome}`);
//     },
// };

// const ana = {
//     nome: 'Ana',
//     sobrenome: 'Salvatore',
//     idade: 20,
//     exibirNome: function () {
//         console.log(`${this.nome} ${this.sobrenome}`);
//     },
// };

// Programação imperativa
// const nome = 'Paulo';
// console.log(nome);

// Programação funcional
// function funcao() {}

// Programação orientada a objeto
// class
// object

// No JS uma classe é uma função que, ao ser executada, gera um objeto
class Pessoa {
    constructor(nome, sobrenome, idade) {
        // console.log(nome, sobrenome, idade);
        // console.log('Execução de new Pessoa()');
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        // console.log(36, this);
    }
}

console.log('38', Pessoa, typeof Pessoa);

const paulo = new Pessoa('Paulo', 'Salvatore', 20);
const ana = new Pessoa('Ana', 'Salvatore', 20);
console.log(paulo);
console.log(ana);
