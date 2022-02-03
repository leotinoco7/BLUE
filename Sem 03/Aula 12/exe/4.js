// Criar uma função que junte dois arrays e retorno o resultado como um novo array

// PRA MELHORAR PODIA BOTAR UMA VALIDACAO PRA VER SE É NUMERO, SE É INTEIRO ETC ...
var prompt = require('prompt-sync')();

let array1 = [];
let array2 = [];
let quantArray;

quantArray = +prompt('Digite quantos números você deseja no array1: ');

for (x = 0; x < quantArray; x++) {
    num = +prompt('Digite um número para o array1:');
    array1.push(num);
}

quantArray = +prompt('Digite quantos números você deseja no array2: ');

for (x = 0; x < quantArray; x++) {
    num = +prompt('Digite um número para o array1:');
    array2.push(num);
}

function juntaArray() {
    var array3 = array1.concat(array2);
    array3 = array3.sort(function (a, b) {
        return a - b;
    });
    console.log('Array3:');
    console.log(array3);
}

juntaArray();
