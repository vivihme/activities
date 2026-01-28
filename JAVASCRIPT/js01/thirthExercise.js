// FAÇA UM PROGRAMA QUE ENCONTRE A RAIZ QUADRADA DE UM NÚMERO, MULTIPLIQUE O RESULTADO POR 10 E DIVIDA POR 33
const prompt = require('prompt-sync')();
let number = Number(prompt('Digite um número: '));

let resultado = (Math.sqrt(number) * 10) / 33
console.log('O resultado final é : ' + resultado)