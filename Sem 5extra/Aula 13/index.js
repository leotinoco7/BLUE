// Aula 13 - objetos

// Criação de objetos

// const numeros = [10, 20, 30];
// //                0, 1 , 2

// console.log(numeros, typeof numeros);

// Objetos precisam de nomes ou valores para seus índices

// const nome = 'Paulo';
// const sobrenome = 'Salvatore';
// const idade = 20;

// function exibirPessoa(nome, sobrenome, idade)

// Chave e Valor
// Index e value
// Key e value
// const pessoa = {
//     nome: 'Paulo',
//     sobrenome: 'Salvatore',
//     idade: 20,
// };

// exibirPessoa(pessoa, typeof pessoa);

// Acessando propriedades dos objetos usando
// console.log(pessoa.idade, typeof pessoa.idade);

// Acessando propriedades dos objetos usando ["nome_da_propriedade_"]
// console.log(pessoa['nome']);

// pessoa.nome = 'Ana';

// console.log(pessoa);

// const pessoa = {
//     nome: 'Paulo',
//     sobrenome: 'Salvatore',
//     idade: 20,
//     vivo: true,
//     lista: [1, 2, 3], // < TRAILING COMMA - EM JS É OPCIONAL -- RETIRADO NO JSON (PROIBIDO)
// };

// Transofrmando um objeto JavaScript em um JSON
const pessoaEmJson = JSON.stringify(pessoa);

console.log(typeof pessoaEmJson, pessoaEmJson);

// JSON JavaScript Object Notation
//

// "\"" indica pra qualquer linguagem de programacao que o caractere depois = texto - usar ' ou ` funciona ao invés do ""
const textoEmJson =
    '{"nome":"Paulo","sobrenome":"Salvatore","idade":20,"vivo":true,"lista":[1,2,3]}';

console.log(typeof textoEmJson, textoEmJson);

// transformar json em objeto

const objeto = JSON.parse(textoEmJson);

console.log(typeof objeto, objeto);

const nome = textoEmJson.nome;
const nome2 = objeto.nome;
console.log(nome, nome2);

const listaPokemonsEmJson =
    '{"count":1126,"next":"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}]}';

const listaPokemonsObjeto = JSON.parse(listaPokemonsEmJson);

console.log(listaPokemonsObjeto);
