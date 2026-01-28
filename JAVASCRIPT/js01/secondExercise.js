// FAÇA UM PROGRAMA QUE MULTIPLIQUE DOIS NÚMEROS E O RESULTADO ADICIONE 10
const prompt = require('prompt-sync')();
let numberOne = Number(prompt('Digite um número: '));
let numberTwo = Number(prompt('Digite outro número: '));

let resultadoFinal = (numberOne * numberTwo) + 10
console.log('O resultado final é ' + resultadoFinal)