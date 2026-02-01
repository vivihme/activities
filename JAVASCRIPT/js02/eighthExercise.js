/*FAÇA UM PROGRAMA ONDE LEIA UM NÚMERO E DIGA SE ELE É:
- ÍMPAR
- PAR
- PRIMO E ÍMPAR
- PAR E DIVISÍVEL POR 5
*/
const prompt = require('prompt-sync')();
let number = prompt('Type a number: ');
let isEven = number % 2 === 0;
let divider = 2;

if (isEven) {
    if (number % 5 === 0){
        console.log('This number is Even and Divisible by 5')
    } else {
        console.log('This number is Even');
    }
} else {
    console.log('This number is Odd')
}

while (number % divider !== 0){
    divider++
}
if (number === divider && number > 1){
    console.log('This number is Odd and Prime')
}