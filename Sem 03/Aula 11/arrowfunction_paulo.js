// Arrow Function

const somarArrow = (a, b) => {
    return a + b;
};

// ARROW FUNCTION PRECISA ; NO FINAL !

const resultadoArrow = somarArrow(1, 2);
console.log({ resultadoARrow });

const subratacaoArrow = (a, b) => a - b;

const resultadoSubtracao = subtracaoArrow(5, 4);

console.log({ resultadoSubtracao });

const exibirNome = nome => console.log(nome); // se só tiver 1 parametro na arrow, nao precisa de ()
// RESULTADO É VOID
// SE NAO COLOCAR OS ()
const exibirNome2 = nome => console.log;
const resultadoExecucaNome = exibirNome('Paulo');
console.log({ resultadoExecucaNome });

const resultadoExecucaNome2 = exibirNome2('Paulo 2');
console.log({ resultadoExecucaNome2 });
