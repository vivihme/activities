//FAÇA UM PROGRAMA QUE IMPRIMA NA TELA SE UM NOME É IGUAL AO OUTRO NOME DIGITADO. PORÉM OS DOIS NOMES DEVEM ESTAR EM OBJETOS SEPARADOS.
const prompt = require('prompt-sync')();
let objectOne = {};
let objectTwo = {};

objectOne.name = String(prompt('Digite o primeiro nome: '));
objectTwo.name = String(prompt('Digite outro nome: '))
console.log(objectOne.name === objectTwo.name)