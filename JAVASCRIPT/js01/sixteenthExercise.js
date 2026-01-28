const prompt = require('prompt-sync')();

let object = [];
object[0] = String(prompt('Qual o seu nome? '));
object[1] = Number(prompt('Qual a sua idade? '));
object[2] = Number(prompt('Qual a sua altura? '));
object[3] = String(prompt('Qual o seu endereço? '));
object[4] = String(prompt('Qual a sua nacionalidade? '));
    console.log(object.length)