// Função dentro de objeto:

const paulo = {
    nome: 'Paulo',
    sobrenome: 'Salvatore',
    idade: 20,
    exibirNome2: function () {
        console.log('Exibir o nome da pessoa');
        console.log(`${this.nome} ${this.sobrenome}`);
    },
};

const ana = {
    nome: 'Ana',
    sobrenome: 'Salvatore',
    idade: 20,
    exibirNome2: function () {
        console.log('Exibir o nome da pessoa');
        console.log(`${this.nome} ${this.sobrenome}`);
    },
};

paulo.exibirNome2();
ana.exibirNome2();

// function exibirNome(pessoa) {
//     if (pessoa === undefined) {
//         console.error(
//             'O objeto pessoa está undefined, informe um valor válido',
//         );

//         return;
//     }
//     console.log(`O nome dessa pessoa é ${pessoa.nome} ${pessoa.sobrenome}`);
// }

// exibirNome(paulo);
// exibirNome(ana);
// exibirNome(undefined);
