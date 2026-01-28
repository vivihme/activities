//FAÇA UM PROGRAMA ONDE ENTRAMOS COM DOIS NÚMEROS, E ELE IMPRIME SE O PRIMEIRO NÚMERO É MAIOR QUE O PRIMEIRO
const prompt = require('prompt-sync')();
let numberOne = Number(prompt('Digite um número: '));
let numberTwo = Number(prompt('Digite o segundo número: '));
    console.log(numberOne > numberTwo)