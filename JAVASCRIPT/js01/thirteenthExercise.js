// FAÇA UM PROGRAMA ONDE COLOCAMOS DOIS NÚMEROS ÍMPARES E O PROGRAMA IMPRIMA O RESTO DA DIVISÃO
const prompt = require('prompt-sync')();
let numberOne = Number(prompt('Digite um número para ser dividido: '));
let numberTwo = Number(prompt('Digite um número para dividir: '));
    console.log(numberOne % numberTwo)