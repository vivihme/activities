// FAÇA UM PROGRAMA QUE COMPARE UM NÚMERO COM 10 E IMPRIMA NA TELA "O NÚMERO É MAIOR", "O NÚMERO É MENOR" OU O "NÚMERO É IGUAL"

const prompt = require('prompt-sync')();
const numberFixed = 10;
let numberUser = Number(prompt('Digite um número: '));

if (numberUser > numberFixed){
    console.log('O número digitado é maior que 10')
} else if (numberUser === numberFixed){
    console.log('O número digitado é igual a 10')
} else {
    console.log('O número digitado é menor que 10')
}