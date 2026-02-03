/*FAÇA UM PROGRAMA ONDE ELE LEIA 4 NUMEROS. EM CADA CASO, ELE DEVE RETORNAR A MENSAGEM CONDIZENTE:
- TODOS OS NÚMEROS SÃO ÍMPARES
- TODOS OS NÚMEROS SÃO PARES
- DEFAULT:
*/
const prompt = require('prompt-sync')();
let numberOne = Number(prompt('Type a number: '));
let numberTwo = Number(prompt('Type another number: '));
let numberThree = Number(prompt('Type a number again: '));
let numberFour = Number(prompt('Type the last number: '));

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0){
    console.log('All the numbers are even');
} else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0) {
    console.log('All the numbers are odd')
} else {
    console.log('You entered both even and odd numbers')
}