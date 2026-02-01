/* FAÇA UM PROGRAMA ONDE LEIA UM NÚMERO E DIGA SE ELE É PAR OU ÍMPAR*/
const prompt = require('prompt-sync')();
let number = Number(prompt('Type a number: '));
if (number % 2 ){
    console.log('This number is odd');
} else {
    console.log('This number is even')
}