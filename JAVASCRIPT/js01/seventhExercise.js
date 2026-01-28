// FAÇA UM PROGRAMA QUE IMPRIMA NA TELA SE UM NOME É IGUAL AO OUTRO NOME DIGITADO
const prompt = require('prompt-sync')();
let names = [];
names[0] = String(prompt('Digite um nome: '));
names[1] = String(prompt('Digite outro nome: '));

console.log(names[0] === names[1]);