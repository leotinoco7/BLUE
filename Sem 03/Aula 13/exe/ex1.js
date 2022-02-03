// Crie um objeto pessoa com os atributos: nome, idade, peso e altura.
// Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer.
// Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm.
// Crie um método bio que retorna uma string com todas as informações da pessoa.

const pessoa = {
    nome: 'Leonardo',
    idade: 29,
    peso: 90,
    altura: 170,

    envelhecer: function () {
        this.idade++;
    },

    engordar: function () {
        this.peso++;
    },

    crescer: function () {
        if (this.idade <= 21) {
            this.altura += 0.5;
        }
    },
    bio: (bio = () => {
        return `${pessoa.nome}, ${pessoa.idade} anos, ${pessoa.peso} Kg, ${pessoa.altura} cm`;
    }),
};

console.log(pessoa.bio());
pessoa.envelhecer(4);
console.log(pessoa.bio());
