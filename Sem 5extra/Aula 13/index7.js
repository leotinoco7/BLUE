// Object Keys, values, entries

const paulo = {
    nome: 'Paulo',
    sobrenome: 'Salvatore',
    idade: 20,
};

// console.log('keys', Object.keys(paulo));
// console.log('values', Object.values(paulo));
console.log('entries', Object.entries(paulo));

for (const [key, value] of Object.entries(paulo)) {
    // console.log('Entry', entry);
    // const key = entry[0];
    // const value = entry[1];

    console.log(key, value);
}

// EXTRA

const nome = 'Paulo';

const teste = 'asdasd';

console.log({ nome }); // melhor visualização, sem redundancia
console.log({ teste }); // essa sintaxe nao funciona quando tem um ponto, exe pessoa.teste

// define o valor do objeto pela variavel
