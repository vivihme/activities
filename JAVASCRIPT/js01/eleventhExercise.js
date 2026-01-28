//FAÇA UM PROGRAMA QUE IMPRIMA NA TELA SE UM NOME É IGUAL AO OUTRO NOME DIGITADO. PORÉM OS DOIS NOMES DEVEM ESTAR EM UM MESMO OBJETO.
const prompt = require('prompt-sync')();
let object = {};

object.firstName = String(prompt('Digite o primeiro nome: '));
object.secondName = String(prompt('Digite outro nome: '))
console.log(object.firstName === object.secondName)