/*FAÇA UM PROGRAMA ONDE LEIA UM NÚMERO E DIGA SE ELE É:
- ÍMPAR
- PAR
- PRIMO E ÍMPAR
- PAR E DIVISÍVEL POR 5
*/
const prompt = require('prompt-sync')();
const number = prompt('Type a number: ');

if (number % 2 === 0){
    if (number % 5 === 0){
        console.log('O número é par e divisível por 5')
    } else{
        console.log('O número é par e NÃO divisível por 5')
    }
} else {
    for (let index = 2; index < number; index++){
        if (number % index === 0){
            console.log('O número é ímpar e NÃO primo')
                break
        } else if (index === number - 1){
            console.log('O número é primo')
        }
    }
}