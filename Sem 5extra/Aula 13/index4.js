const paulo = {
    nome: 'Paulo',
    sobrenome: 'Salvatore',
    idade: 20,
    exibirNome: function () {
        console.log(`${this.nome} ${this.sobrenome}`);
    },
    testeDeEscopo: function () {
        console.log(9, this);
    },
};

paulo.testeDeEscopo();
