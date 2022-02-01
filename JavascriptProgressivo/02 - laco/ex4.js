// Supondo que a população de um país A seja da ordem de 80000 habitantes
// com uma taxa anual de crescimento de 3% e que a população de B seja 200000
// habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e
// escreva o número de anos necessários para que a população do país A ultrapasse ou
// iguale a população do país B, mantidas as taxas de crescimento.

let popA = 80000;
let taxA = 3;
let popB = 200000;
let taxB = 1.5;
let x = 0;

popA = popA * (1 + taxA / 100);

do {
    popA = popA * (1 + taxA / 100);
    popB = popB * (1 + taxB / 100);
    console.log(`Ano ${x + 1}`);
    console.log(popA.toFixed(2));
    console.log(popB.toFixed(2));
    console.log('---------------');
    x++;
} while (popA <= popB);

if (popA == popB) {
    console.log(
        `Foram necessários ${x} anos para que a população de A e B se igualasse`,
    );
} else {
    console.log(
        `Foram necessários ${x} anos para que a população de A ultrapasse a população de B`,
    );
}
