// FAÇA UM PROGRAMA QUE VERIFICA SE UMA PESSOA OU BRASILEIRA
const prompt = require('prompt-sync')();

let signUp = {
}
signUp.name = String(prompt('Write your name: '));
signUp.age = Number(prompt('Write your age: '));
signUp.nationality = String(prompt('Write your nationality: '));

let isBrazilian = signUp.nationality.toLowerCase() === 'brazilian';


if (isBrazilian){
    console.log('You are Brazilian')
} else {
    console.log('You are not Brazilian')
}