// Escopo

// This em um arquivo .js executado a partir do node, o this é um objeto vazio
console.log(4, this);

// This dentro de uma function, representa um object [global]
function funcaoNormal() {
    console.log(8, this);
}

funcaoNormal();

// this dentro de uma função arrow mnatem o this do escopo anterior+
const funcaoArrow = () => {
    console.log(14, this);
};

funcaoArrow();
