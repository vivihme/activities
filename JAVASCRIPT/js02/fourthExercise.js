// FAÇA UM PROGRAMA QUE RECEBA TRÊS NUMEROS INTEIROS, E DEVE IMPRIMIR QUAL O MAIOR E O MENOR

const prompt = require('prompt-sync')();
let numbers = []

for (let index = 0; index < 3; index++){
    numbers[index] = Number(prompt((`Digite o ${index + 1}º número: `)))
}
console.log(`O maior número digitado é: `+ Math.max(...numbers))
console.log(`O menor número digitado é: ` + Math.min(...numbers))
/*
ALTERNATIVA MAIS CABULOSA
if (numbers[0] >= numbers[1] && numbers[0] >= numbers[2]){
    console.log(`O ${numbers[0]} é o maior número digitado`)
} else if (numbers[1] >= numbers[0] && numbers[1] >= numbers[2]){
    console.log(`O ${numbers[1]} é o maior número digitado`)
} else {
    console.log(`O ${numbers[2]} é o maior número digitado`)
}
if (numbers[0] <= numbers[1] && numbers[0] <= numbers[2]){
    console.log(`O ${numbers[0]} é o menor número digitado`)
} else if (numbers[1] <= numbers[0] && numbers[1] <= numbers[2]){
    console.log(`O ${numbers[1]} é o menor número digitado`)
} else {
    console.log(`O ${numbers[2]} é o menor número digitado`)
}
*/