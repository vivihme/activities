// FAÇA UM PROGRAMA QUE INICIE COM DOIS NOMES E IMPPRIMA NA TELA: "OLÁ, MEU NOME É [], E MEU PARTNER DO CODECLUB É []"
const prompt = require('prompt-sync')();
let nameOne = String(prompt('Digite um nome: '));
let nameTwo = String(prompt('Digite outro nome: '));

console.log('Olá, meu nome é ' + nameOne + 'e meu partner do CodeClub é ' + nameTwo)
