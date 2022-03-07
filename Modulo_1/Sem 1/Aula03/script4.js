var prompt = require("prompt-sync")();

const name = prompt("Digite seu nome: ");
const age = +prompt("Digite sua idade: ");

if (age >= 18) {
  console.log(`${name}, você pode beber`);
} else {
  console.log(`Você poderá beber daqui a ${-age + 18} anos`);
}
