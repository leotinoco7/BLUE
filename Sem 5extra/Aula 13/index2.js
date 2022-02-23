// Função dentro de objeto:

const paulo = {
    nome: 'Paulo',
    sobrenome: 'Salvatore',
    idade: 20,
};

const ana = {
    nome: 'Ana',
    sobrenome: 'Salvatore',
    idade: 20,
};

function exibirNome(pessoa) {
    console.log(`O nome dessa pessoa é ${pessoa.nome} {pessoa.sobrenome}`);
}

exibirNome(paulo);
exibirNome(ana);
