// Faça um programa que peça o nome de usuário e a senha de um usuário.
// A senha deve ter no mínimo 8 caracteres, pelo menos um número e um
// caracter especial.

var prompt = require("prompt-sync")();

let regex = /[0-9](?=.*[}{,.^?~=+\-_\/*\-+.\|])/; // só não retire a parte (?= ... ), pois isso
// sinaliza um positive lookahead, que é necessário para validar que  existe
// pelo menos um dos caracteres sinalizados no grupo antes de iniciar a captura.

const account = prompt("Digite seu usuário: ");

const password = prompt("Digite sua senha: ");
if (password.length >= 8 && regex.test(password)) {
  console.log("Senha válida");
} else {
  console.log("Senha inválida");
}

console.log(`${account}:${password}`);
