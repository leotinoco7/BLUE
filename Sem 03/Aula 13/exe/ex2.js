// Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário
// cadastrado com as informações: nome, cargo e salário.
// Ele deve armazenar todos esses objetos em uma lista.
// Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar
// o processo, e caso não haja mais funcionários para cadastrar, ele deve chamar uma função que deve
// apresentar a quantidade de funcionários com cada cargo e os nomes deles.
// (Você pode limitar as opções de cargo para facilitar.)

var prompt = require('prompt-sync')();

const lista = [];
const listaT = [];
const listaA = [];
const listaG = [];

function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
}

do {
    console.log('Cadastro de funcionários.');
    nome = prompt('Digite o nome do funcionário: ');
    cargo = prompt(
        'Digite o cargo (tecnico, analista, gerente) ',
    ).toLowerCase();
    if (cargo == 'tecnico') {
        listaT.push(nome);
    } else if (cargo == 'analista') {
        listaA.push(nome);
    } else if (cargo == 'gerente') {
        listaG.push(nome);
    }
    salario = prompt('Digite o salario:');
    funcionario = new Funcionario(nome, cargo, salario);
    lista.push(funcionario);
    var resposta = prompt('Deseja cadastrar outro funcionário? ').toLowerCase();

    while (resposta !== 'sim' && resposta !== 'nao') {
        console.log('Resposta inválida');
        break;
    }
} while (resposta == 'sim');

function quantidade() {
    console.log(`${listaT.length} técnicos:`);
    for (x = 0; x < listaT.length; x++) {
        console.log(`${listaT[x]}`);
    }
    console.log(`${listaA.length} analistas:`);
    for (x = 0; x < listaA.length; x++) {
        console.log(`${listaA[x]}`);
    }
    console.log(`${listaG.length} gerentes:`);
    for (x = 0; x < listaG.length; x++) {
        console.log(`${listaG[x]}`);
    }
}

quantidade();
