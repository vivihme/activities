/* CRIE CINCO OBJETOS NESSE FORMATO
 {
NONE: ""
IDADE: ""
SEXO: ""
PROFISSÃO: ""
NACIONALIDADE: ""
 }
AO RODAR O PROGRAMA, DEVE IMPRIMIR SE A PESSOA É APROVADA OU NÃO NO PROCESSO
PARA SER APROVADA, A PESSOA DEVE SER EMANCIPADA LEGALMENTE E BRASILEIRA */
const prompt = require('prompt-sync')();

for (let index = 0; index < 4; index++){
    let peopleAtributes = {
    name: String(prompt('Write your name: ')),
    age: Number(prompt('Write your age: ')),
    sex: String(prompt('Write your sex: ')),
    occupation: String(prompt('Write your occupation: ')),
    nationality: String(prompt('Write your nationality: ')),
    }
    let isBrazilian = peopleAtributes.nationality.toLowerCase() === 'brazilian';
        if (peopleAtributes.age >= 18 && isBrazilian){
            console.log(`GREAT, ${peopleAtributes.name}! You were accepted`)
        } else {
            console.log(`Sorry, ${peopleAtributes.name}! You were not accepted`)
        }
    console.log('---------------------------')
}