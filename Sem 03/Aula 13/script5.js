// NAO PODE USAR SOMENTE IDADE - IDADE NÃO É DEFINIDO
// É PESSOA.IDADE, como está dentro do objeto pode ser usado this.idade

const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    cidade: 'Londrina',
    empresa: 'Blue',
    interesses: ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes'],
    envelhecer: function () {
        this.idade++;
    },

    rejuvenescer: function () {
        this.idade--;
    },

    teste: function () {
        return 'teste';
    },
    testeMaiorIdade: function () {
        if (this.idade > 17) {
            // OLHAR COMENTARIO PRIMEIRA LINHA
            return 'maior de idade';
        } else {
            return 'menor de idade';
        }
    },

    testeArrow: (somar = (a, b) => {
        const soma = a + b;
        return soma;
    }),
};

console.log(pessoa.idade);

pessoa.envelhecer();

console.log(pessoa.idade);

pessoa.rejuvenescer();

console.log(pessoa.idade);

console.log(pessoa.teste());

console.log(pessoa.testeMaiorIdade());

console.log(pessoa.testeArrow(15, 20));
