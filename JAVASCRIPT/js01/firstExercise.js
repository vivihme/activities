// FAÇA UM PROGRAMA QUE SOME DOIS NÚMEROS
const prompt = require('prompt-sync')();
let numberOne = Number(prompt('Digite um número: '));
let numberTwo = Number(prompt('Digite outro número: '));

let soma = numberOne + numberTwo
console.log('A soma dos dois números é ' + soma)