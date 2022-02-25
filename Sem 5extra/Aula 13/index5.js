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
    constructor(nome, sobrenome, idade, rg) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.rg = rg;
        // PODE SER FEITO DENTRO DO CONSTRUCTO DESSA MANEIRA:
        // this.exibirNome = function () {
        //     console.log(`O nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
        // };
    }
    // dentro de uma classe qualquer coisa no primeiro nivel com a declaracao() = FUNCAO - nao precisa usar function
    exibirNome() {
        console.log(`O nome dessa pessoa é ${this.nome} ${this.sobrenome}`);
    }
    exibirRg() {
        console.log(`RG: ${this.rg}`);
    }
}

console.log('38', Pessoa, typeof Pessoa);

const paulo = new Pessoa('Paulo', 'Salvatore', 20, 12345);
const ana = new Pessoa('Ana', 'Salvatore', 20, 6789);

console.log(paulo);
console.log(ana);

paulo.exibirNome();
ana.exibirNome();

paulo.exibirRg();
ana.exibirRg();
