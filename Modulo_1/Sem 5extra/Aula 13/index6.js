// Desconstrução de objetos

const paulo = {
    nome: 'Paulo',
    sobrenome: 'Salvatore',
    idade: 20,
};

console.log(paulo);

// MESMA COISA QUE A UNICA LINHA ALI EMBAIXO
// const nome = paulo.nome;
// const sobrenome = paulo.sobrenome;
// const idade = paulo.idade;

const { nome, sobrenome, idade } = paulo;

console.log(nome, sobrenome, idade);

const numeros = [10, 20, 30];

const [a, b, c] = numeros;

console.log(a, b, c);
