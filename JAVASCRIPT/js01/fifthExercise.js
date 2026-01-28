// FAÇA UM PROGRAMA QUE IMPRIMA NA TELA SE UM NOME É IGUAL AO OUTRO NOME DIGITADO
const prompt = require('prompt-sync')();
let numberOne = String(prompt('Digite um nome: '));
let numberTwo = String(prompt('Digite outro nome: '));

console.log(numberOne === numberTwo);