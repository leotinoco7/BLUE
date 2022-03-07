this.info = 'Teste';

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
    testeDeEscopo2: () => {
        console.log(12, this);
    },
};
// function = escopo do objeto
// arrow function = escopo do arquivo
paulo.testeDeEscopo();
paulo.testeDeEscopo2();
