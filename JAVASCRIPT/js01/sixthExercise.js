// FAÇA UM PROGRAMA QUE IMPRIMA NA TELA SE UM NOME É DIFERENTE DO OUTRO DIGITADO
const prompt = require('prompt-sync')();
let nameOne = String(prompt('Digite um nome: '));
let nameTwo = String(prompt('Digite outro nome: '));

console.log(nameOne !== nameTwo);